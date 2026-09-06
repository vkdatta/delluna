export const name="dots-three-circle-vertical-bold";
export const id="dl_e553bddc9b8d4ce289df";
export const url=new URL("../icons/dots-three-circle-vertical-bold.svg?v=abce585ec6fad2c67cf810e780bd4d62123b1da2df5dd9e2c332cb4998cc8560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
