export const name="lucid_3-shrimp-off";
export const id="dl_dea801c9f26b4506a1ed";
export const url=new URL("../icons/lucid_3-shrimp-off.svg?v=61f9d86b837bca99758dd1137c142514222f9dcb0f83403200b77dd36f6fc44b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
