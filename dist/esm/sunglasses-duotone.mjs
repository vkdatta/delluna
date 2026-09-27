export const name="sunglasses-duotone";
export const id="dl_2f3f800529d369627878";
export const url=new URL("../icons/sunglasses-duotone.svg?v=d1869993a8e02ae48a08da512120599725303ecf37edef5278ae278a71ab723a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
