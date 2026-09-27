export const name="outlet-fill";
export const id="dl_8e7dcd12f9794c09c2a0";
export const url=new URL("../icons/outlet-fill.svg?v=a7f4ec858112b871f09333b98d07265d1e62177234b6fd8efd5e37137593b8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
