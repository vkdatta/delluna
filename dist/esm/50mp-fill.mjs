export const name="50mp-fill";
export const id="dl_fe795317fc0f6d08179a";
export const url=new URL("../icons/50mp-fill.svg?v=270827a31b0b820d24e2df22c294829ab5b20b3c0517a98f1f8d0be84a9016a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
