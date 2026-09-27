export const name="mobiledata_off";
export const id="dl_fb528a4b5d2fd456351c";
export const url=new URL("../icons/mobiledata_off.svg?v=515ec3d8feeada9d478d8881ccaea397b9dc9cfa0b4773966420e557787a777c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
