export const name="yin-yang-thin";
export const id="dl_75c107473cf9f9c07db5";
export const url=new URL("../icons/yin-yang-thin.svg?v=321a10c7605edbfce6c1dbc5694a049d33d110d1732363f90bd449b3e7b3da92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
