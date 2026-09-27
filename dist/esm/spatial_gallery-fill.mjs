export const name="spatial_gallery-fill";
export const id="dl_0c9195225b13199bbab5";
export const url=new URL("../icons/spatial_gallery-fill.svg?v=b399f342565411e2c562d055b128c1e5728e5b24b199aa4b03557c33e1244096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
