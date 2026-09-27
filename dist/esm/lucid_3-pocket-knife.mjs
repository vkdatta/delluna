export const name="lucid_3-pocket-knife";
export const id="dl_aa4226e5a23241249c2a";
export const url=new URL("../icons/lucid_3-pocket-knife.svg?v=7613ae9965b0b906869b2f4ae3ac69f2066969468a1162384fbbee03d4959255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
