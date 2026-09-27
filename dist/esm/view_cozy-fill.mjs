export const name="view_cozy-fill";
export const id="dl_54030ab48c6d993347e9";
export const url=new URL("../icons/view_cozy-fill.svg?v=32f6de5b83584e694ed42c457d95c43f94179d80b08fa4a04217e282c77923bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
