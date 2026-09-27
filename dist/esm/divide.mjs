export const name="divide";
export const id="dl_8e15e7b1d5334e06a072";
export const url=new URL("../icons/divide.svg?v=b00659e1beba2fc3f5c2c7e134f99192068559ba502ae3c073a239e0028e3d92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
