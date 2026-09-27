export const name="lucid_3-square-activity";
export const id="dl_ef25e6a85e1b47d78712";
export const url=new URL("../icons/lucid_3-square-activity.svg?v=f285f5b45f6027fb81cdd02c479708334f8cc6161a2a3e166aa0a6120dbc0043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
