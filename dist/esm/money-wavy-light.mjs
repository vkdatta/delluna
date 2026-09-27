export const name="money-wavy-light";
export const id="dl_2d7da22c58234b5693f1";
export const url=new URL("../icons/money-wavy-light.svg?v=37b588aa63d80be7d1c9f037b7ac4929c1956e511f3ec6ce17b2dbbd9c08186c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
