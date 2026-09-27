export const name="arrow-up-left";
export const id="dl_861826e371ad482280a9";
export const url=new URL("../icons/arrow-up-left.svg?v=f2d1b13c6494021d5bd69862c77755d5b691294f8d7a1b2b055cfc5b84368646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
