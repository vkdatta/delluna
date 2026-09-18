export const name="stylus_pen";
export const id="dl_b58a352f88cd417ba8f9";
export const url=new URL("../icons/S/stylus_pen.svg?v=9ce68d70846131c13da42ff77f8740e39699f3c7c964c061ef5d8c626f854384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
