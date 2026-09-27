export const name="on_hub_device-fill";
export const id="dl_79af6b739e95e5a45618";
export const url=new URL("../icons/on_hub_device-fill.svg?v=44e9fba5cf37653d2ce5d9459c67c4f8397a519ace4b8ab4b6a886d6cd2e9dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
