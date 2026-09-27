export const name="trophy-duotone";
export const id="dl_0f091250cb38b53bbe76";
export const url=new URL("../icons/trophy-duotone.svg?v=3e9f32441fc0315f359dbab71322d9e069cada283527918360d6789a84c7bf14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
