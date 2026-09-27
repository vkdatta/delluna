export const name="microphone-duotone";
export const id="dl_9f9b6d635a3148dab541";
export const url=new URL("../icons/microphone-duotone.svg?v=f7ac6a352b03e4e30a8c1cf2ade70bf15988a9a298612509c9ff76d1f212f886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
