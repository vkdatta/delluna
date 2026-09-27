export const name="lucid_3-panel-right-open";
export const id="dl_31e0d961384a4195a136";
export const url=new URL("../icons/lucid_3-panel-right-open.svg?v=5985686fee33220e6ece7b670234780abebf1c9df0a5891173bd0b04f6453d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
