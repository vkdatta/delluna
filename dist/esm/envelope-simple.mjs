export const name="envelope-simple";
export const id="dl_d28675cce9754b28b485";
export const url=new URL("../icons/envelope-simple.svg?v=b08a7925229c1466096f22f923fb617851f96b45c5e750a81f824d3adcb2c31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
