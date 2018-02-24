var SetFocusCommand = (function (_super) {
    __extends(SetFocusCommand, _super);
    function SetFocusCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    SetFocusCommand.prototype.execute = function () {
        var param = this.CommandParam;
        var targetCellFormula = param.TargetCell;

        var cellLocation = this.getCellLocation(targetCellFormula);
        this.SetFocusToDom(this, cellLocation, 0);
    }

    SetFocusCommand.prototype.SetFocusToDom = function (self, cellLocation, retryTime) {
        //PageloadedCommand set focus does not work, so try 10 times.
        if (retryTime > 10)
        {
            return;
        }

        var cell = Forguncy.Page.getCellByLocation(cellLocation);
        if (!cell) {
            return;
        }

        //set focus
        cell.setFocus();

        if (!cell.hasFocus()) {
            retryTime++;
            Forguncy.DelayRefresh.setTimeout(function () {
                self.SetFocusToDom(self, cellLocation, retryTime);
            }, 100);
        }
    }
    return SetFocusCommand;
}(Forguncy.CommandBase));

Forguncy.CommandFactory.registerCommand("SetFocusCommand.SetFocusCommand, SetFocusCommand", SetFocusCommand);