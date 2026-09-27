export const name="local_car_wash-fill";
export const id="dl_3b11356e199409bce551";
export const url=new URL("../icons/local_car_wash-fill.svg?v=4870becfa8933d9593c78ff9c3499fdfc2df2490a54424769ee46374e8729276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
