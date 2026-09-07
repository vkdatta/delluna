export const name="variable";
export const id="dl_e2eb6a5caf104450b65d";
export const url=new URL("../icons/variable.svg?v=2cbaf916d5bedc655df79646a9105497bfc73bf70617e0513d9295e82e1648d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
