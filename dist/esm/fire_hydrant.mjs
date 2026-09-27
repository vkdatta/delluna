export const name="fire_hydrant";
export const id="dl_619c31cde1033a7c9825";
export const url=new URL("../icons/fire_hydrant.svg?v=a2cdea77981dfc4c21be805417e2383649a3c69852c7d29471173de2fe53501a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
