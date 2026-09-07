export const name="cloud-arrow-up-fill";
export const id="dl_25d44fa7c9dd4a79bb0f";
export const url=new URL("../icons/cloud-arrow-up-fill.svg?v=868ca259160f1d1116e19580bf9d8045b4055ef6d152cc560a50e95f53ac01d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
