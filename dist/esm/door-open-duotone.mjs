export const name="door-open-duotone";
export const id="dl_68d7ca148f5a4b329e9f";
export const url=new URL("../icons/door-open-duotone.svg?v=c9cca938b4f65185e4ff263f1a91250dff170819a03977e44b46291eee40a608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
