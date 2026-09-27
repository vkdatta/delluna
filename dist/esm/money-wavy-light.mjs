export const name="money-wavy-light";
export const id="dl_2d7da22c58234b5693f1";
export const url=new URL("../icons/money-wavy-light.svg?v=f95a240d75be1782edced3492a6a100d0365bb655a2836e7210c8f2ddff770dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
