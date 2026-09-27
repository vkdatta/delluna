export const name="currency_pound";
export const id="dl_e138745f5b58fc3eef24";
export const url=new URL("../icons/currency_pound.svg?v=db7a8bbe12669790aa24bf78338cd4ccd6fdc5acbe54a4914653f91b9275e3da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
