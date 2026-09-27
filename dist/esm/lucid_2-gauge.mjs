export const name="lucid_2-gauge";
export const id="dl_5be1daff9e784a7d8e8f";
export const url=new URL("../icons/lucid_2-gauge.svg?v=6bd8b8df4b8562cdcc1543fd35b9fb42042a372f2bead018e4bccd4846a06f6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
