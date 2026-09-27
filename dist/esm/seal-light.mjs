export const name="seal-light";
export const id="dl_7ad3daa3d3c5b805b2d4";
export const url=new URL("../icons/seal-light.svg?v=28368caa1a09924f59776e8fc5f8ef4782c4afada96372c486baaa0cae73fd96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
