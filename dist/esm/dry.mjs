export const name="dry";
export const id="dl_ed37a62162581fa654c1";
export const url=new URL("../icons/dry.svg?v=3bf0de98cf4ab95d69a1c2b66920ad786603ace8a5146fb468d66f1f7d3486fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
