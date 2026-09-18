export const name="linked_camera";
export const id="dl_c1fc0742bf764d7d8f4a";
export const url=new URL("../icons/L/linked_camera.svg?v=5df0a26424a346051754622a29c37dd8da18701895e4041f6c5cb44650b7aadd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
