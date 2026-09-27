export const name="directions_run";
export const id="dl_af2b21b0c1d6207d5f2b";
export const url=new URL("../icons/directions_run.svg?v=ddabc691c01864279b44c78a21b83c51a8f454bbfc1f4d09f4dda1c876289187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
