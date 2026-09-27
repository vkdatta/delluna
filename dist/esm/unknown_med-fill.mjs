export const name="unknown_med-fill";
export const id="dl_26ce974a7059c738e970";
export const url=new URL("../icons/unknown_med-fill.svg?v=bf2ceed0fa98d1f81f094c0b361dbaa2fbae82dc1b67ab53305571ec2856d0db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
