export const name="collapse_content-fill";
export const id="dl_d0ef467e2e460c2736e4";
export const url=new URL("../icons/collapse_content-fill.svg?v=83d507543c87e2d16a6f8e31969de9f7800bd5f20c9e1c457df0c4bb8af4ad38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
