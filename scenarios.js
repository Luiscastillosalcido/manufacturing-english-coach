window.SCENARIO_FLOWS = {
  "production issue": {
    title: "Production Issue",
    context: "A missing connector may stop a wire harness production line.",
    steps: [
      {q:"What production issue are you currently facing?",b1:"We have a missing connector affecting production.",pro:"We currently have a missing connector affecting the production line. The material shortage may impact today's production schedule.",v:["missing connector","production line","material shortage","production schedule"]},
      {q:"What is the impact on production?",b1:"Production may stop in two hours.",pro:"Current inventory will only support two more hours of production before a line stoppage occurs.",v:["inventory coverage","line stoppage","production impact"]},
      {q:"What containment action was implemented?",b1:"We transferred material from another line.",pro:"We implemented a containment action by transferring material from another production line to maintain output.",v:["containment action","material transfer","maintain output"]},
      {q:"Who owns the recovery plan?",b1:"The Materials Team owns the recovery plan.",pro:"The Materials Team owns the recovery plan and is coordinating directly with the supplier.",v:["recovery plan","action owner","supplier coordination"]},
      {q:"What is the committed recovery date?",b1:"The material will be available by October 15.",pro:"The supplier committed to recovering material availability by October 15.",v:["committed date","material availability","supplier commitment"]}
    ]
  },
  "supplier delay": {title:"Supplier Delay",context:"A supplier delay may affect a pilot build.",steps:[
    {q:"Which component is delayed?",b1:"The ERAD adapter is delayed.",pro:"The ERAD adapter is currently delayed due to a supplier capacity issue.",v:["ERAD adapter","supplier capacity","component delay"]},
    {q:"What is the lead-time impact?",b1:"The delivery is five days late.",pro:"The supplier confirmed a five-day delay compared with the original lead time.",v:["lead time","confirmed delay","original timing"]},
    {q:"What actions have been taken?",b1:"Purchasing requested a faster shipment.",pro:"Purchasing requested an expedited shipment and daily status updates.",v:["expedited shipment","daily status","Purchasing"]},
    {q:"What is the risk to customer timing?",b1:"The pilot build may be delayed.",pro:"The delay may impact the pilot build schedule if the material is not received by next Friday.",v:["pilot build","customer timing","material receipt"]},
    {q:"What is your backup plan?",b1:"We are looking for alternate inventory.",pro:"We are evaluating alternate inventory sources and temporary material reallocation.",v:["alternate inventory","material reallocation","backup plan"]}
  ]},
  "capacity review": {title:"Capacity Review",context:"Customer demand must be compared with available production capacity.",steps:[
    {q:"Can current capacity support demand?",b1:"Yes, current capacity supports demand.",pro:"Current capacity supports customer demand with approximately twelve percent available capacity.",v:["available capacity","customer demand","capacity margin"]},
    {q:"How was capacity calculated?",b1:"We used cycle time and available hours.",pro:"Capacity was calculated using cycle time, available labor hours, efficiency assumptions, and forecast demand.",v:["cycle time","labor hours","efficiency assumptions","forecast demand"]},
    {q:"What is the current utilization?",b1:"Current utilization is eighty-eight percent.",pro:"Current utilization is approximately eighty-eight percent based on the approved demand forecast.",v:["utilization","demand forecast","capacity study"]},
    {q:"What is the main bottleneck?",b1:"Terminal crimping is the bottleneck.",pro:"Terminal crimping is currently the primary bottleneck operation.",v:["terminal crimping","bottleneck operation","constraint"]},
    {q:"What is the mitigation plan?",b1:"We will train operators and balance the line.",pro:"Additional operator training and workstation balancing are being implemented to increase output.",v:["operator training","workstation balancing","increase output"]}
  ]},
  "engineering change": {title:"Engineering Change",context:"An ECN changes a connector design and may affect tooling and inventory.",steps:[
    {q:"What engineering change is being reviewed?",b1:"We are reviewing a connector change.",pro:"We are reviewing ECN-1457 related to connector design modifications.",v:["ECN","connector design","design modification"]},
    {q:"Has the customer approved the change?",b1:"Customer approval is pending.",pro:"Customer approval is still pending, so the implementation release remains on hold.",v:["customer approval","implementation release","pending approval"]},
    {q:"What is the tooling impact?",b1:"We need to validate new tooling.",pro:"New tooling validation is required before implementation.",v:["tooling validation","implementation","technical impact"]},
    {q:"What is the inventory impact?",b1:"The current inventory may become obsolete.",pro:"Current inventory will become obsolete after the new revision is released.",v:["obsolete inventory","new revision","inventory impact"]},
    {q:"What is the implementation timing?",b1:"Implementation is planned for November 1.",pro:"Implementation is planned for November 1 following customer approval and validation closure.",v:["implementation timing","validation closure","effectivity date"]}
  ]},
  "quality issue": {title:"Quality Issue",context:"Pull-force results are below the connector specification.",steps:[
    {q:"What quality issue was identified?",b1:"The pull-force result was below specification.",pro:"Terminal pull-force results did not meet the specification requirements.",v:["pull-force result","specification requirement","terminal"]},
    {q:"What containment action was implemented?",b1:"We quarantined the material.",pro:"Affected material was quarantined, and additional inspections were initiated.",v:["quarantined material","additional inspection","containment"]},
    {q:"Was a root cause identified?",b1:"The machine settings were incorrect.",pro:"The root cause was linked to incorrect machine settings.",v:["root cause","machine settings","verified evidence"]},
    {q:"What corrective action is being implemented?",b1:"We adjusted the machine and retrained the operator.",pro:"Machine parameters were adjusted, and operator retraining was completed.",v:["machine parameters","operator retraining","corrective action"]},
    {q:"When will validation be completed?",b1:"Validation will be completed by Friday.",pro:"Validation activities are expected to be completed by Friday.",v:["validation activity","completion date","quality evidence"]}
  ]},
  "launch readiness": {title:"Launch Readiness Review",context:"The team is preparing for SOP and reviewing APQP deliverables.",steps:[
    {q:"Are all APQP deliverables complete?",b1:"Most deliverables are complete, but PPAP is open.",pro:"Most APQP deliverables are complete, but PPAP approval remains open.",v:["APQP deliverables","PPAP approval","open item"]},
    {q:"What is the highest launch risk?",b1:"Component availability is the highest risk.",pro:"Component availability remains the highest risk to SOP timing.",v:["component availability","SOP timing","launch risk"]},
    {q:"Is the tooling ready?",b1:"Tooling validation is ninety-five percent complete.",pro:"Tooling validation is currently ninety-five percent complete, with final evidence still pending.",v:["tooling readiness","validation evidence","completion status"]},
    {q:"Are work instructions updated?",b1:"All work instructions are released.",pro:"All work instructions have been reviewed, approved, and released to production.",v:["work instruction","production release","document approval"]},
    {q:"Do you foresee any concerns?",b1:"We do not see major concerns.",pro:"At this time, we do not foresee any major concerns affecting the committed launch date.",v:["major concern","committed launch date","readiness status"]}
  ]},
  "prototype build": {title:"Prototype Build",context:"A prototype build will validate product design and manufacturing readiness.",steps:[
    {q:"What is the purpose of the build?",b1:"The build will validate the design and process.",pro:"The prototype build will validate product design and manufacturing readiness.",v:["prototype build","product design","manufacturing readiness"]},
    {q:"Are all components available?",b1:"One connector is still under review.",pro:"All components are available except one connector currently under supplier review.",v:["component availability","supplier review","open component"]},
    {q:"What validation activities are planned?",b1:"We planned electrical and pull-force tests.",pro:"Electrical testing, pull-force testing, and fit validation are scheduled.",v:["electrical testing","pull-force testing","fit validation"]},
    {q:"What open issues remain?",b1:"One engineering change needs customer approval.",pro:"Customer approval for one engineering change is still pending.",v:["open issue","engineering change","customer approval"]},
    {q:"Who will communicate the results?",b1:"The program team will present the results.",pro:"The program team will present the build results during the customer review.",v:["build results","program team","customer review"]}
  ]},
  "material shortage": {title:"Material Shortage",context:"A critical terminal is unavailable and may stop production.",steps:[
    {q:"Which material is missing?",b1:"A critical terminal is unavailable.",pro:"A critical 2.8-millimeter terminal is currently unavailable.",v:["critical terminal","material shortage","component availability"]},
    {q:"How much inventory remains?",b1:"Inventory supports one more shift.",pro:"Current inventory will support one additional production shift.",v:["inventory coverage","production shift","daily consumption"]},
    {q:"What is the supplier commitment?",b1:"The supplier will ship tomorrow.",pro:"The supplier committed to shipping replacement material tomorrow.",v:["supplier commitment","replacement material","shipment date"]},
    {q:"What is the line-stoppage risk?",b1:"Production may stop by Wednesday.",pro:"Production could stop by Wednesday if the replacement material is not received.",v:["line-stoppage risk","material receipt","production continuity"]},
    {q:"What action is being taken?",b1:"We started a daily escalation meeting.",pro:"A daily escalation meeting has been established to monitor recovery progress.",v:["daily escalation","recovery progress","monitoring cadence"]}
  ]},
  "volvo customer update": {title:"Volvo Customer Update",context:"A customer program review requires a concise status and risk update.",steps:[
    {q:"Can you provide a status update for AEI87?",b1:"AEI87 is on schedule.",pro:"AEI87 activities remain on schedule, and no timing impact is currently expected.",v:["program status","timing impact","on schedule"]},
    {q:"What open risks remain?",b1:"Connector availability is still a risk.",pro:"Connector availability remains under supplier monitoring.",v:["open risk","connector availability","supplier monitoring"]},
    {q:"What is the implementation status?",b1:"Planning is complete and validation is in progress.",pro:"Implementation planning has been completed, and validation activities are in progress.",v:["implementation planning","validation activity","program execution"]},
    {q:"Do you require customer support?",b1:"No additional support is required.",pro:"At this time, no additional customer support is required.",v:["customer support","support request","open dependency"]},
    {q:"When will the next update be provided?",b1:"We will update the customer next week.",pro:"The next update will be presented during next week's program review.",v:["next update","program review","customer communication"]}
  ]},
  "srica project review": {title:"SRICA Project Review",context:"A tooling consolidation project is being evaluated for savings and floor space.",steps:[
    {q:"What project is being evaluated?",b1:"We are evaluating tooling consolidation.",pro:"We are evaluating a tooling consolidation project within the SRICA initiative.",v:["tooling consolidation","SRICA initiative","project evaluation"]},
    {q:"What operational savings are expected?",b1:"We expect annual savings.",pro:"The project is expected to generate annual operational savings of approximately one hundred fifty thousand dollars.",v:["operational savings","annual savings","business case"]},
    {q:"What is the floor-space impact?",b1:"The project will free two hundred square feet.",pro:"The proposal would free approximately two hundred square feet of floor space.",v:["floor-space impact","layout optimization","space savings"]},
    {q:"What is the payback period?",b1:"The payback is twelve months.",pro:"The estimated payback period is twelve months.",v:["payback period","financial impact","investment recovery"]},
    {q:"What is the implementation timing?",b1:"Implementation is planned for next year.",pro:"Implementation is planned for the first quarter of next year.",v:["implementation timing","first quarter","project milestone"]}
  ]}
};
