export const name="local_bar";
export const id="dl_59504132aa488d778b4c";
export const url=new URL("../icons/local_bar.svg?v=ad128139e57c73b649876bed99180447cf109ef9118fee050cbf7472d3da871c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
