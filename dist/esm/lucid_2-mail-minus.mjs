export const name="lucid_2-mail-minus";
export const id="dl_e3711150aefd4d59b6ea";
export const url=new URL("../icons/lucid_2-mail-minus.svg?v=2780127d07ce67ecefc9770f153fcae007d217752aeaf4db020dc019542a2790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
