export const name="parking_valet";
export const id="dl_b15fdc72469562205d3f";
export const url=new URL("../icons/parking_valet.svg?v=bd8e6aa49fbea8bedd3d686b0f75a1efe6ebe12ce849bc987553daed27e7ef6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
