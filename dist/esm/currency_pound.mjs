export const name="currency_pound";
export const id="dl_544fedc59d2443c49294";
export const url=new URL("../icons/C/currency_pound.svg?v=8b5e70a04f0c57d52ddc6b6b4ec14c2c1d7e6a202eef5f7ffe6414de49941e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
