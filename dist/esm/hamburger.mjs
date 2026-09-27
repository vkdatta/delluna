export const name="hamburger";
export const id="dl_ecaaf65177f64dd8b4e9";
export const url=new URL("../icons/hamburger.svg?v=e0a1d41b1823a8afac489b30c1638becdc5671b30b60a4a2cfa67384b0c3ca72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
