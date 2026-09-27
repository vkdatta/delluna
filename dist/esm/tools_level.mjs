export const name="tools_level";
export const id="dl_f0fc8fd7b8b65d49c9dc";
export const url=new URL("../icons/tools_level.svg?v=c9e832c60d89ebaf67dadafbc82ddac6bb8f2286f86adf17cb3162e3acf9f106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
