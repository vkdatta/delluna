export const name="photo_library";
export const id="dl_04e4241b1fe14d9e4241";
export const url=new URL("../icons/photo_library.svg?v=7fe95a42aa4cd62ba968075b3cd9e24b61ce045003e1dc04fba7c2ba6d24b10f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
