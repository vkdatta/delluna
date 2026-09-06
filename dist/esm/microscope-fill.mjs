export const name="microscope-fill";
export const id="dl_4bffb4a55e6a4b0781ac";
export const url=new URL("../icons/microscope-fill.svg?v=6e2a65bfc74ffbe4c776b032117453d616bcfea01bff25b59a6341073120e72c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
