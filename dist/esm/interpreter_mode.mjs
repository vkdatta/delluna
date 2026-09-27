export const name="interpreter_mode";
export const id="dl_533999e453b64df4e76f";
export const url=new URL("../icons/interpreter_mode.svg?v=407752d7dac30601a3afd50bbb0ae6b0a783c4c4a2b504fb03155829b41a0356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
