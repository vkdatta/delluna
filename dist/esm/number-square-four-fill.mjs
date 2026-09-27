export const name="number-square-four-fill";
export const id="dl_e40931fc50cc406ea9b1";
export const url=new URL("../icons/number-square-four-fill.svg?v=bc11623cb8211f3623bfdfbdbf8389f50fa3fe1189836929e8ec908c0a13e694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
