export const name="person_3-fill";
export const id="dl_60a074b8ffadd204f9d6";
export const url=new URL("../icons/person_3-fill.svg?v=99117c62342463bb9a07df753fee3174e4c5a988f19e469e719ef0ac0bd0640c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
