export const name="user-circle-minus";
export const id="dl_43f3a10e6c22c6178dc9";
export const url=new URL("../icons/user-circle-minus.svg?v=3f2e766e1c46af0b042996ec44661f5f49387634ab7eaf7cb0cd43425d0c8b39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
