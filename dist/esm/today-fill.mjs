export const name="today-fill";
export const id="dl_906875b6337f5ac21824";
export const url=new URL("../icons/today-fill.svg?v=0efb73f600c6ade06e205c94642e3a643042da182efdbdf7820281bf38054a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
