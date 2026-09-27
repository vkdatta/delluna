export const name="light_group-fill";
export const id="dl_89e7840d54c4d6a66514";
export const url=new URL("../icons/light_group-fill.svg?v=2133fcb49b7fc6c1d59ff6855fff1be4f9418089dbcd0f9fb93148e2690c4a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
