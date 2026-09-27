export const name="docs_add_on";
export const id="dl_677609543a28f5a1e1d4";
export const url=new URL("../icons/docs_add_on.svg?v=1b91ae34cda4bd146e8d6537b8723380367bdfb56cd5eef5f2550690c322209e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
