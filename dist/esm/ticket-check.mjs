export const name="ticket-check";
export const id="dl_55f47d20a74f4cc191b5";
export const url=new URL("../icons/ticket-check.svg?v=4749652336af9bad472a489241a9dc62dbd6be2ff752a02d6755f18f32d33ac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
