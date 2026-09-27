export const name="letter-circle-v-light";
export const id="dl_c5d3f18359244906850c";
export const url=new URL("../icons/letter-circle-v-light.svg?v=5c8d4a3cba599ab88c9c38fc0bb00c16ac8725f741a5d39cd60ebc0c2787627d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
