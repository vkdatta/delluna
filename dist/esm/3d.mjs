export const name="3d";
export const id="dl_a9feb2f4ecd4975a17db";
export const url=new URL("../icons/3d.svg?v=1ad1b3c92a1218f21a42f2a33c6f081751228ecfd6ebd6b48b159f5e6d27689f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
