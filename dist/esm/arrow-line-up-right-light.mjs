export const name="arrow-line-up-right-light";
export const id="dl_82d922d472ab4ba3b98c";
export const url=new URL("../icons/arrow-line-up-right-light.svg?v=66d903abe0135962f05434c958b5eaf5221c087b2cc6e29cc87489225dc0a68b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
