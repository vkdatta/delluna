export const name="lucid_3-picture-in-picture";
export const id="dl_82dcf802705a40499044";
export const url=new URL("../icons/lucid_3-picture-in-picture.svg?v=cbad8131536b03ec1fcc9f0e5ca5df795fabf2f22bf3b59a20f53ee42b1e3a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
