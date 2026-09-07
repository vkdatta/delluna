export const name="sock-bold";
export const id="dl_19f3fa837e474ba4b542";
export const url=new URL("../icons/S/sock-bold.svg?v=adc49109e9f8e04ac3c4500caffb830c51e4aa3642fae7068cb39755e7954135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
