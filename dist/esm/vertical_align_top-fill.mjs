export const name="vertical_align_top-fill";
export const id="dl_cba94dd805062c695a71";
export const url=new URL("../icons/vertical_align_top-fill.svg?v=b0d8e84d38882ce4ed8dcbac4a5e1e544ada40de9b892d3f91ca3bef4c041af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
