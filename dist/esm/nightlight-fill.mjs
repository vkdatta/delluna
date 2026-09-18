export const name="nightlight-fill";
export const id="dl_edad1fca603049dba5de";
export const url=new URL("../icons/nightlight-fill.svg?v=a825fdea75d87dfa45f84b72f0098c284156d0441a276ee06062fa1fb7238184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
