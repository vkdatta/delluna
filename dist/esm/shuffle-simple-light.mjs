export const name="shuffle-simple-light";
export const id="dl_237541e94a146ae5297c";
export const url=new URL("../icons/shuffle-simple-light.svg?v=6f82f9ef54cd52ef7e2d10a105cfb24d70844836cab6ac50064cc3967b761e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
