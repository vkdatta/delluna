export const name="lab_panel";
export const id="dl_42bbb8fbe3ef062c25ec";
export const url=new URL("../icons/lab_panel.svg?v=7b881b532ebed6d16b7ff3984ddb2c058899c3749abdc574961d3e799af74ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
