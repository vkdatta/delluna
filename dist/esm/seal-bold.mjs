export const name="seal-bold";
export const id="dl_5345740238e62a1bde7d";
export const url=new URL("../icons/seal-bold.svg?v=072e6fa2c39947d1c8538b2c44ce3317e3daa1b4fe26f53d9b7f993f08778489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
