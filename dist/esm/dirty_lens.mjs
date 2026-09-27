export const name="dirty_lens";
export const id="dl_3927cfbc822aaa32e15f";
export const url=new URL("../icons/dirty_lens.svg?v=db8d112be938be4b3a05b5bc29cd430282cd1c8c1aa599e5ea049e6a3ec44d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
