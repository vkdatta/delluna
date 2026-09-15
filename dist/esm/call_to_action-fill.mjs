export const name="call_to_action-fill";
export const id="dl_1ae2a5cf7e1344b8b9c6";
export const url=new URL("../icons/C/call_to_action-fill.svg?v=1d08e8a4c993907b2e5203554dca87a0a8eca5a84268f753edf0eb50089c49fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
