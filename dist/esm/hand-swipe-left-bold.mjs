export const name="hand-swipe-left-bold";
export const id="dl_3b06ce08f0fc47e0add3";
export const url=new URL("../icons/hand-swipe-left-bold.svg?v=cb8b29ffad7045fc273e03630fcd686ec5b893fbbae79d31a7efef5b23ef7dc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
