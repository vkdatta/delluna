export const name="arrow-left-light";
export const id="dl_a92e48d4cf65420290e2";
export const url=new URL("../icons/arrow-left-light.svg?v=c0cb898c8dbd39be2f85b6c9c46c7f7a9c000ae2ed5f1559551a7608c16ee99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
