export const name="file-png-light";
export const id="dl_7e0ca4c03fb4458ab2bb";
export const url=new URL("../icons/file-png-light.svg?v=48cb1ba887a77e11e0024efaf44efa4e237f52eca01f333956fa20439061693e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
