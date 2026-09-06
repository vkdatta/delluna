export const name="marker-circle-bold";
export const id="dl_74b47458dd6f43a590f0";
export const url=new URL("../icons/marker-circle-bold.svg?v=c583c7f7041e88cda66ef2f312d4571924fee69fe783c86b2717dcd991d10d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
