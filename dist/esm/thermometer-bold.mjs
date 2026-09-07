export const name="thermometer-bold";
export const id="dl_79b341289cee48848990";
export const url=new URL("../icons/T/thermometer-bold.svg?v=8f9668675366aeb9afe15f155b9e9b5e2f54ab009e5cd9b8f64728785e431642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
