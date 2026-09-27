export const name="yin-yang-bold";
export const id="dl_8dfef85c2a996d2bb655";
export const url=new URL("../icons/yin-yang-bold.svg?v=eb686785ec956d87a0b3df71cbdacd489069fde011389e37b826d50b89b04f95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
