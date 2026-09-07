export const name="sword-bold";
export const id="dl_6be8451e0e6641168705";
export const url=new URL("../icons/S/sword-bold.svg?v=530fffc9146242d007810f628e9bf65cbf6f79853b8a8fc4dbce1343d6f54ff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
