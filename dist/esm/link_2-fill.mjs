export const name="link_2-fill";
export const id="dl_325a76a8f2356b02af2d";
export const url=new URL("../icons/link_2-fill.svg?v=efe78c169164691e8b9ffea5f1ee7a2b279b2d0a1c721191237808accd641989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
