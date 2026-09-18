export const name="soap-fill";
export const id="dl_60d8956b2cbb4c8f88c4";
export const url=new URL("../icons/soap-fill.svg?v=1e276dbab35b0401535fa17e6eff965262d58dc9f6f22b5ab7031cf528f84449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
