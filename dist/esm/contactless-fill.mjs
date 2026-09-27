export const name="contactless-fill";
export const id="dl_4fa515b41d9f56cf72bf";
export const url=new URL("../icons/contactless-fill.svg?v=49554f2e37a4c59baa519974efa0c36d62093a12d6ec6ec78a55657f17f0be33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
