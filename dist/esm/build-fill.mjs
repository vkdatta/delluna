export const name="build-fill";
export const id="dl_e4989a35ff7d414289d3";
export const url=new URL("../icons/build-fill.svg?v=86a9595a43281944c46a449acc545455fd2ddcd2ee4096125635db492d7cf14e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
