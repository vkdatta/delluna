export const name="stadia_controller";
export const id="dl_b99a3f6312c25144b2fb";
export const url=new URL("../icons/stadia_controller.svg?v=9d3be4ba3c70047eeec3e64db9ea7ea0d04a3d6f28683decdcdf2e97ec342da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
