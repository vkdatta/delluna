export const name="symptoms";
export const id="dl_9250018f81f83914a24f";
export const url=new URL("../icons/symptoms.svg?v=2cee64e42c61d6eba236833a9526f9e3e548e66caf1f5602a854d65bfa54ac4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
