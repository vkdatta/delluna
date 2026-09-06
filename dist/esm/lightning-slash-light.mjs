export const name="lightning-slash-light";
export const id="dl_c7a69743716b45419420";
export const url=new URL("../icons/lightning-slash-light.svg?v=b803c51f0891b8164f21bf5ea778339e9a01193d545053f88a039cd1c72952d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
