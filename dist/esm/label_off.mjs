export const name="label_off";
export const id="dl_7f34e69c561846f9ee10";
export const url=new URL("../icons/label_off.svg?v=280ca0faca29e8bf315f77743c9b4a05caa62f42683fda9c4635e8313ad4f55d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
