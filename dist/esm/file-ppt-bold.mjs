export const name="file-ppt-bold";
export const id="dl_4cb38116fa0046e397e5";
export const url=new URL("../icons/file-ppt-bold.svg?v=d8be9bab21c72d30f481b2f6180e3818fab4099a2c8beca6cda3a84a332fec55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
