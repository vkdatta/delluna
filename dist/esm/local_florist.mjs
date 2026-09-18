export const name="local_florist";
export const id="dl_7d70800c25bc451d8396";
export const url=new URL("../icons/L/local_florist.svg?v=717482dfeb7743085007cc1006a67174cb5fa8d55b4901f198da2c78ed8ba132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
