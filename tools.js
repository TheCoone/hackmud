function (context,args) { // {p:""}
     // personal tool script
  if(args == null) { p = "info"} else { var p = args.p  }
  var name = args.name

  switch (p) {
    case "info":
    default:
      return "Please use the following !commands! with {page:\" cmd \"}\n\n" +
             "+bank+     - Will bank all GC into the alt account.\n" +
             "+xfer+     - Will transfer all Upgrades to the alt.\n" +
             "+transfer+ - Will show the bankstatements.\n" +
             "+clean+    - This will cleanup (destroy) all Upgrades.\n" +
             "+panic+    - Will completly clean out the account."
    case "bank":
      return "This will bank all GC into the alt account with the name:" + name +""
    case "transfer":
      return "This will show a bankstatement"
    case "xfer":
      return "This will Transfer an item to them alt acccount."
    case "clean":
      return "This will cleanup (destroy) all Upgrades."
    case "panic":
      return "This will be the panic button to burn the user"

  }

}
