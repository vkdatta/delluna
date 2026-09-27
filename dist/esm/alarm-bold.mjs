export const name="alarm-bold";
export const id="dl_a6f4be65b4744914b6bf";
export const url=new URL("../icons/alarm-bold.svg?v=e6bde7751e844f37e5c4e182dd2dc8c896270d5215c4dc54e75a068efbda6b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
