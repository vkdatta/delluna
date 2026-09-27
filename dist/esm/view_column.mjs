export const name="view_column";
export const id="dl_64b5d0c1143187b7253e";
export const url=new URL("../icons/view_column.svg?v=72cddedb8766fa901fcb47d484b94e1a0195dcd66f21b1013e13b2d37bd3dcd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
