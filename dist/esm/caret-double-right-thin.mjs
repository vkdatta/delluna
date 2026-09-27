export const name="caret-double-right-thin";
export const id="dl_f8677353f5294ceca99f";
export const url=new URL("../icons/caret-double-right-thin.svg?v=0f4078a3614b2dead8b08fe7d8e8c2f9891d094af9a9850f90e1e1cf9e4637b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
