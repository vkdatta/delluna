export const name="shooting-star";
export const id="dl_93171e0521ec15cb440f";
export const url=new URL("../icons/shooting-star.svg?v=b9279058da11be2a9540c908dfad1a1f353e260d2790da4bc322a017ee370b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
