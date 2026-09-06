export const name="lucid_3-party-popper";
export const id="dl_9989bd2242ab4342a903";
export const url=new URL("../icons/lucid_3-party-popper.svg?v=0769f298e9c1dae4f5d556129a1e1c8b9b9def2ad40bddeee7a0554d3485559d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
