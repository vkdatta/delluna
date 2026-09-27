export const name="buildings-fill";
export const id="dl_7e647561b3334720b230";
export const url=new URL("../icons/buildings-fill.svg?v=54a704d4241b9bb5b348a01bb511f1e76b3f197e8b8f626062843bb0b197e474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
