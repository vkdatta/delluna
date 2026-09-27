export const name="car_repair-fill";
export const id="dl_3a9bb5415ac9f2f83c4e";
export const url=new URL("../icons/car_repair-fill.svg?v=a02b877e8d37b40305c33e050954feba0dfd9f2b731ebd755bc88cda1ec5814a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
