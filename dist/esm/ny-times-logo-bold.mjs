export const name="ny-times-logo-bold";
export const id="dl_ca51b73672254f67b6ee";
export const url=new URL("../icons/ny-times-logo-bold.svg?v=416221d5f611feaa84e77e27c10a154504d495910e5e16b631e3d5768b85586b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
