export const name="floor_lamp-fill";
export const id="dl_e182c4966aa0e43e83c8";
export const url=new URL("../icons/floor_lamp-fill.svg?v=f9f612d143e171e4d52f1af3c6fb9929ebbe2576f1dfcca1a09da8de829bd94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
