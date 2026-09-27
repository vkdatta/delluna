export const name="local_convenience_store-fill";
export const id="dl_0db8555858728a8474b7";
export const url=new URL("../icons/local_convenience_store-fill.svg?v=4726e7ecf6077f4e69d5a54da900d0ea714dbe56271b10bd05e0aa71c7bcd708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
