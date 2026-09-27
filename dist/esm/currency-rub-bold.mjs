export const name="currency-rub-bold";
export const id="dl_e2b97b7ace404467ae66";
export const url=new URL("../icons/currency-rub-bold.svg?v=e530d86f29d7a940f290d19f987dc04167e028b2c66c8463b008af537da389a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
