export const name="arrow-arc-left-fill";
export const id="dl_fab12c3366c14692af1d";
export const url=new URL("../icons/arrow-arc-left-fill.svg?v=b815db9744f9f3d46e0203af6c08ffa3044b714c5826278e7c6f3b336c9a5baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
