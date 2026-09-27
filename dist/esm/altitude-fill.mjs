export const name="altitude-fill";
export const id="dl_4ceb77423ea97e7a8dd4";
export const url=new URL("../icons/altitude-fill.svg?v=80acc8a6be7755dd40a8189aa2b12f45147eab388e559c9633de908c1e3f18cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
