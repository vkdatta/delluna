export const name="fluid-fill";
export const id="dl_6eee477cb02c4dfdb402";
export const url=new URL("../icons/F/fluid-fill.svg?v=3d0a647c406663a9fcdb4187ee32dc042394e548ebf630df42c1305cb8af0bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
