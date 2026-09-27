export const name="magnifying-glass-bold";
export const id="dl_4548b12dcd2f44f1b02a";
export const url=new URL("../icons/magnifying-glass-bold.svg?v=708a3628e1cb40a776c1e4a6c5646763f066d7942f799b5651da54245e473935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
