export const name="bathroom";
export const id="dl_60472deb5855e17503e7";
export const url=new URL("../icons/bathroom.svg?v=44650733ff35ab5d74b4f2325c155b6b2076ce845a88a3011dc47d4b3bfae516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
