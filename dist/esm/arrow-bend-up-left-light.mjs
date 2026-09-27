export const name="arrow-bend-up-left-light";
export const id="dl_d6c36cb410ba49f6b21d";
export const url=new URL("../icons/arrow-bend-up-left-light.svg?v=df374f786b148ed894edb391626cd876a6d53710b4e3e988ca1268bba14b9444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
