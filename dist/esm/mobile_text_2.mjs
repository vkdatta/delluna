export const name="mobile_text_2";
export const id="dl_296ec726f1074cdf9ba6";
export const url=new URL("../icons/mobile_text_2.svg?v=d9a94e63842ca98c99bf15fa4e8bf81aed63c7e1530344b357d18ffddf7829dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
