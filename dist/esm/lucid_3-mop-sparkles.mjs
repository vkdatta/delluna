export const name="lucid_3-mop-sparkles";
export const id="dl_f85f787cc94b4be5a75e";
export const url=new URL("../icons/lucid_3-mop-sparkles.svg?v=23c2bf1bf1a98556a2d54a7810a92e5268d7483406587ac5d67253e87feb29f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
