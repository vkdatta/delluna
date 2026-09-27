export const name="keyhole-thin";
export const id="dl_800304f865084323bf95";
export const url=new URL("../icons/keyhole-thin.svg?v=ce054c937ff3399819e65bfd14f798d3e712a2eb4b21e76004c9030569c4c83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
