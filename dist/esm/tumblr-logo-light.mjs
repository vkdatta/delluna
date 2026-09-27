export const name="tumblr-logo-light";
export const id="dl_a9aae7f5fe008d5208de";
export const url=new URL("../icons/tumblr-logo-light.svg?v=04a0b4a7542de3ba760fc6163a91c33999ede57fbc2285acde7c1692595c227b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
