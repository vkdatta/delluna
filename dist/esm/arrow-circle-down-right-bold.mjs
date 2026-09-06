export const name="arrow-circle-down-right-bold";
export const id="dl_c92a40858ad04f7ebbf7";
export const url=new URL("../icons/arrow-circle-down-right-bold.svg?v=7da4c0a62ba5b047ba5c0b5ef1288d75cda6a39aaff60914a7d9efafc5e8246c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
