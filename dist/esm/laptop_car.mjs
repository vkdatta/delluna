export const name="laptop_car";
export const id="dl_afa8702a1fd8cf651cba";
export const url=new URL("../icons/laptop_car.svg?v=f8d9b0f265b1db801226b867bc454a78c5efe9fd994af55390704eedf1cf8a8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
