export const name="horizontal_align_center-fill";
export const id="dl_dcc2d88e36a9c5095a7c";
export const url=new URL("../icons/horizontal_align_center-fill.svg?v=27654374fd79bb46e09835c48d0ba98fc6e10d041b0f9c3e6221f01103ffce7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
