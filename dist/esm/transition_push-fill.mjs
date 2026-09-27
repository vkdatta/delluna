export const name="transition_push-fill";
export const id="dl_58d0377a3808080161c9";
export const url=new URL("../icons/transition_push-fill.svg?v=24e8686a9bc1af2335a2640e5a3d43b73ef83cec978bb13e39d637131cec69dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
