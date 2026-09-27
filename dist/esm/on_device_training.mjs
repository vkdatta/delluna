export const name="on_device_training";
export const id="dl_4d9d953a3d08ca047352";
export const url=new URL("../icons/on_device_training.svg?v=3da2690080cacd083594e9d5bfba50d63fcf8f949d55a9335f2446194f504082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
