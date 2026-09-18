export const name="animation-fill";
export const id="dl_713122587ee542c19d31";
export const url=new URL("../icons/animation-fill.svg?v=a6a72e4f64b4b68ccd7b48af3a0a1bdbcbf1e2c5d17ec67777ab2a158e9deae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
