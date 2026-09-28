export const name="thermometer-bold";
export const id="dl_e3e529214fbeb3d35973";
export const url=new URL("../icons/thermometer-bold.svg?v=8f9668675366aeb9afe15f155b9e9b5e2f54ab009e5cd9b8f64728785e431642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
