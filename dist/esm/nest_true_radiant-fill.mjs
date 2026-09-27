export const name="nest_true_radiant-fill";
export const id="dl_c8009ac62a09abedb061";
export const url=new URL("../icons/nest_true_radiant-fill.svg?v=040cbe293fc5f6373904277462f6e7a5b56a07dc6b2a3ca2a7928850d5506843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
