export const name="basket-bold";
export const id="dl_d7e6b2beee854c678e54";
export const url=new URL("../icons/basket-bold.svg?v=18b50abc944b0ef4ef22c3834cf84230dc9fa2a20f74167d0b48286a0f93f954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
