export const name="cloud-light";
export const id="dl_e5806d8f63874e2c9c43";
export const url=new URL("../icons/cloud-light.svg?v=8c7f0917fe2961347e9c91eb072994c49fc4430cd6ef499925ca68d5d02cd556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
