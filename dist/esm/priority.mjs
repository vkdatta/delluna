export const name="priority";
export const id="dl_d424d02081c0c365a42c";
export const url=new URL("../icons/priority.svg?v=66a2b304377b68fa303808585879b60087b10a330a8600472ac622aed20d695c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
