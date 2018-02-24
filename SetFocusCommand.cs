using GrapeCity.Forguncy.Commands;
using GrapeCity.Forguncy.Plugin;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SetFocusCommand
{
    [Icon("pack://application:,,,/SetFocusCommand;component/Resources/icon.png")]
    public class SetFocusCommand : Command
    {
        [FormulaProperty(true)]
        [ResourcesDisplayName("SetFocusCommand_TargetCell")]
        public object TargetCell { get; set; }

        public override string ToString()
        {
            return Properties.Resources.SetFocusCommand_DisplayName;
        }

        public override CommandScope GetCommandScope()
        {
            return CommandScope.Cell | CommandScope.ListView | CommandScope.PageLoad;
        }
    }

    public class ResourcesDisplayNameAttribute : DisplayNameAttribute
    {
        public ResourcesDisplayNameAttribute(string displayName)
            :base(displayName)
        {
        }

        public override string DisplayName
        {
            get
            {
                return Properties.Resources.ResourceManager.GetString(base.DisplayName);
            }
        }
    }
}
