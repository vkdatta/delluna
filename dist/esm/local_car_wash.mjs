export const name="local_car_wash";
export const id="dl_7e3c977c41cb51e88e6a";
export const url=new URL("../icons/local_car_wash.svg?v=d296b770efe2b10d991056ae1ad6c8e38ccd8626c95742f6a43ee5dc4f9b8e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
