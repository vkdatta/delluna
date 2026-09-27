export const name="mixture_med-fill";
export const id="dl_12c684eaa50234097d2e";
export const url=new URL("../icons/mixture_med-fill.svg?v=c428a81b7308c2d2491254d90836856fb58fd39468ac3d7d91762b1985671d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
