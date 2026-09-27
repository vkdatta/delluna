export const name="control_camera";
export const id="dl_aeb34e4ad8a547c716aa";
export const url=new URL("../icons/control_camera.svg?v=782c94b83e36549b0be746b5b5fa11cd27a51890ea680d54a68e885d27a11b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
