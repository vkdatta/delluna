export const name="text-t-slash-light";
export const id="dl_29e527f68d655de42404";
export const url=new URL("../icons/text-t-slash-light.svg?v=de9bb9e5570e3b04affb4b0919792975d5129fe8a08f22955d2fb57996c5da22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
