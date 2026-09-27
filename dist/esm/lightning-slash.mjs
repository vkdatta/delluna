export const name="lightning-slash";
export const id="dl_7f99d8d871c34f6ba96b";
export const url=new URL("../icons/lightning-slash.svg?v=09a78136cce8bfc0c1893613e0d8069900be18bcc7cc1e3abff675f64458afb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
