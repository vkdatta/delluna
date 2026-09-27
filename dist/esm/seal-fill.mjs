export const name="seal-fill";
export const id="dl_e92c0bd0b941bdce45bf";
export const url=new URL("../icons/seal-fill.svg?v=c44a2dd48066fd7ec7efd3d60b766dcc04236b7d4e009ef8a600d3b515cf80ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
