export const name="coffee-bean-bold";
export const id="dl_f39afffbf9c4483c869c";
export const url=new URL("../icons/coffee-bean-bold.svg?v=a93b912995550a658647db16bb21b403812bf1f928932027f8cb0ecd3dbdfe4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
