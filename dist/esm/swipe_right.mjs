export const name="swipe_right";
export const id="dl_20070e885358425abc01";
export const url=new URL("../icons/S/swipe_right.svg?v=ff5edb3921d92fa692963532c8114a153ed151dfc3b07466a387e6b976e09385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
