export const name="pants-light";
export const id="dl_a1f7ae69fd0746879cce";
export const url=new URL("../icons/pants-light.svg?v=b95bdeb9f2b8cbb688f6148e2ba1c267e9b6d94a1f57a21a9925300faf5788ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
