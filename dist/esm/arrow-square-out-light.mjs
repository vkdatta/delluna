export const name="arrow-square-out-light";
export const id="dl_ae63f64b8b194a51bcab";
export const url=new URL("../icons/arrow-square-out-light.svg?v=3ca41ca59adcb09c4d14fb7f3f3cf9ecfcc9c66bb66c6a59d482beed1bab0931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
