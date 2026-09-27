export const name="wrench-off";
export const id="dl_94e746d8452641a78b2d";
export const url=new URL("../icons/wrench-off.svg?v=34b6ee4ddf787cd3f146bba103b01f57b4339fb8ff4d23fe17fd9551bdcfca2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
