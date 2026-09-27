export const name="sun-light";
export const id="dl_f4cc7e4d5099fbf22c77";
export const url=new URL("../icons/sun-light.svg?v=05c954405f8c65a7b39a436b257f4e4c23b99fbbeec7081ff5431f6bab95df20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
