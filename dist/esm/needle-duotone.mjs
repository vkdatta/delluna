export const name="needle-duotone";
export const id="dl_6989e9fac302410ba2a6";
export const url=new URL("../icons/needle-duotone.svg?v=f9bdd97d1485e8f72ef93002eaa71b84b8a75508ffedead06140b81b4800ca45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
