export const name="package-light";
export const id="dl_3216ff4e5d1240c38e0f";
export const url=new URL("../icons/package-light.svg?v=9d881301a7a2c135840c5c4ba9128bc7e3da78af67f7c4b680f4c50922505780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
