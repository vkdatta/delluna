export const name="image_arrow_up-fill";
export const id="dl_d7ef9af7ed08e5df8a3f";
export const url=new URL("../icons/image_arrow_up-fill.svg?v=aef3f9fde1bfa8a7681dc91c17bd95aeb94f4c48a71ff004f99bef42dfdc6c0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
