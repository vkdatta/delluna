export const name="dynamic_feed-fill";
export const id="dl_3c5fd0cdee424053aed9";
export const url=new URL("../icons/dynamic_feed-fill.svg?v=c316e286fe8902e12a1ef937e7b390952a6149f4f28b6c3f94cad6502426f468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
