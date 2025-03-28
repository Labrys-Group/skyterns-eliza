export const daoABI = [{"inputs":[{"internalType":"address","name":"dao","type":"address"},{"internalType":"address","name":"where","type":"address"},{"internalType":"address","name":"who","type":"address"},{"internalType":"bytes32","name":"permissionId","type":"bytes32"}],"name":"DaoUnauthorized","type":"error"},{"inputs":[],"name":"DelegateCallFailed","type":"error"},{"inputs":[],"name":"FunctionDeprecated","type":"error"},{"inputs":[],"name":"FunctionNotSupported","type":"error"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"enum IPlugin.Operation","name":"operation","type":"uint8"}],"internalType":"struct IPlugin.TargetConfig","name":"targetConfig","type":"tuple"}],"name":"InvalidTargetConfig","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"members","type":"address[]"}],"name":"MembersAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"members","type":"address[]"}],"name":"MembersRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"definingContract","type":"address"}],"name":"MembershipContractAnnounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint64","name":"startDate","type":"uint64"},{"indexed":false,"internalType":"uint64","name":"endDate","type":"uint64"},{"indexed":false,"internalType":"bytes","name":"metadata","type":"bytes"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"indexed":false,"internalType":"struct Action[]","name":"actions","type":"tuple[]"},{"indexed":false,"internalType":"uint256","name":"allowFailureMap","type":"uint256"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"enum IPlugin.Operation","name":"operation","type":"uint8"}],"indexed":false,"internalType":"struct IPlugin.TargetConfig","name":"newTargetConfig","type":"tuple"}],"name":"TargetSet","type":"event"},{"inputs":[],"name":"EXECUTE_PROPOSAL_PERMISSION_ID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SET_TARGET_CONFIG_PERMISSION_ID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"canExecute","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_metadata","type":"bytes"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Action[]","name":"_actions","type":"tuple[]"},{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"createProposal","outputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"customProposalParamsABI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"contract IDAO","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"execute","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_metadata","type":"bytes"},{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct Action[]","name":"_actions","type":"tuple[]"},{"internalType":"uint256","name":"_allowFailureMap","type":"uint256"}],"name":"executeProposal","outputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCurrentTargetConfig","outputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"enum IPlugin.Operation","name":"operation","type":"uint8"}],"internalType":"struct IPlugin.TargetConfig","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTargetConfig","outputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"enum IPlugin.Operation","name":"operation","type":"uint8"}],"internalType":"struct IPlugin.TargetConfig","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasSucceeded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IDAO","name":"_dao","type":"address"},{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"enum IPlugin.Operation","name":"operation","type":"uint8"}],"internalType":"struct IPlugin.TargetConfig","name":"_targetConfig","type":"tuple"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isMember","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pluginType","outputs":[{"internalType":"enum IPlugin.PluginType","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolVersion","outputs":[{"internalType":"uint8[3]","name":"","type":"uint8[3]"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"enum IPlugin.Operation","name":"operation","type":"uint8"}],"internalType":"struct IPlugin.TargetConfig","name":"_targetConfig","type":"tuple"}],"name":"setTargetConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]

export const daoProxyAddress = "0x0cBB5fa636Fb5D20Fdf6D64bD52a1847Cc0c0d65"; // the above is the proxy abi for the dao?