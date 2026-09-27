export const name="humerus-fill";
export const id="dl_feb68c7c6ca9f0197710";
export const url=new URL("../icons/humerus-fill.svg?v=a4450db8c5f04b57db3696047637ac8610324428ea2f41f350e6b04bcc62c73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
