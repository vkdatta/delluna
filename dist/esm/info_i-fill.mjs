export const name="info_i-fill";
export const id="dl_1bf457e6658c4a8ebc64";
export const url=new URL("../icons/I/info_i-fill.svg?v=967af9b64eb0ba2b3d22c86de38361c375dd3e22afeca4d3d06e8d06b3ee94ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
