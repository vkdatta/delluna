export const name="cloud-snow-bold";
export const id="dl_d4fa6148964e47f0896e";
export const url=new URL("../icons/cloud-snow-bold.svg?v=ee0fe413ed2fb1e825b675dec2817e61bda665f32594983ff32abf1e4acf6763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
