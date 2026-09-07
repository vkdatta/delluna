export const name="sword-thin";
export const id="dl_fecff5f6130247e08a4e";
export const url=new URL("../icons/S/sword-thin.svg?v=52fa081b9c3d1e24dfcbc5577a3c58211dfec9d9b1726332dd0e509d5274eb4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
