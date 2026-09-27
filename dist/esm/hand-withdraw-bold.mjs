export const name="hand-withdraw-bold";
export const id="dl_2938d87af8d44b2e931b";
export const url=new URL("../icons/hand-withdraw-bold.svg?v=b5bb47e2d382e20356ec58c01e26a462d35bdaa6c37d0893fdbe33f1c0a6fc58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
