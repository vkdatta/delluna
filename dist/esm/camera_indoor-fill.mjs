export const name="camera_indoor-fill";
export const id="dl_facde7e0ee6b666a893c";
export const url=new URL("../icons/camera_indoor-fill.svg?v=b5a42ea72110b68cb94c56391cce821f2da4759b4949adf051ef8dc6bfbbe420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
