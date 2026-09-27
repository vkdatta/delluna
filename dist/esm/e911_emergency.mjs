export const name="e911_emergency";
export const id="dl_18dfa64aff631087a972";
export const url=new URL("../icons/e911_emergency.svg?v=20732c3a4e077e78c702e1f1b7104da924c544b4b521ce7f0fcb3d0f5e764f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
