export const name="ent";
export const id="dl_5626edd2d32b21a1fa39";
export const url=new URL("../icons/ent.svg?v=ef12acaf100a2f33403228f27978c7c8e681aff44f1836c6f725686763ab77ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
