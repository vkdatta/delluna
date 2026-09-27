export const name="shoppingmode";
export const id="dl_6680d8313c747b0b28f4";
export const url=new URL("../icons/shoppingmode.svg?v=8efe279f9d5a6e526e18af2de694f767c9c465453cf36be71f4209f521275e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
