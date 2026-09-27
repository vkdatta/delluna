export const name="sunny_snowing";
export const id="dl_016ad8a12cee387fbe24";
export const url=new URL("../icons/sunny_snowing.svg?v=27cad1c175b19fb422f4c0058b7bf5eb780446cd0fcfa5ed0ce504b7a19ac341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
