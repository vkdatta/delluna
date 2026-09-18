export const name="sailing-fill";
export const id="dl_0331f0ae8ac9450a980b";
export const url=new URL("../icons/sailing-fill.svg?v=3390d8e4991d2e9f976ba49c071b03defc5b6e2d9104f7e1e2da7edfaa1158ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
