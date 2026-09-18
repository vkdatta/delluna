export const name="heat_pump";
export const id="dl_b09f9cc867e84a35a22f";
export const url=new URL("../icons/H/heat_pump.svg?v=172af91bd2317b75d7339e59b59622e285351a787107011eec0e4bd702170c75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
