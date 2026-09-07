export const name="arrow-up-bold";
export const id="dl_2e8ae96ddbef4341bf0e";
export const url=new URL("../icons/arrow-up-bold.svg?v=87dade5b87b48190dae13370375e2d84f6c22548eebac93ff2f46d091882fb78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
