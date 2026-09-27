export const name="flashlight";
export const id="dl_747722f7223f40bbb480";
export const url=new URL("../icons/flashlight.svg?v=6b5b053a9b15acd87ab5740b9a35e60ca76dcbb2bd0a05807c28f6f18f47822c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
