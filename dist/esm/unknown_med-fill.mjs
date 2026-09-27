export const name="unknown_med-fill";
export const id="dl_55c9b3cae3ddf16ef6f5";
export const url=new URL("../icons/unknown_med-fill.svg?v=969752f6a08335c98734d7657ed1e12e6908cb74c756f1daf150353f489e512c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
