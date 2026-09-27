export const name="caret-double-left";
export const id="dl_aa6841a1df824b1b9554";
export const url=new URL("../icons/caret-double-left.svg?v=2b68a370b107db31592fe0f3df5efa4eace8056f012ec6e9f393b792396fba91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
