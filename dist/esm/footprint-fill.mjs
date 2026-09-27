export const name="footprint-fill";
export const id="dl_17ad5df07aeefb3ca564";
export const url=new URL("../icons/footprint-fill.svg?v=094dc1677ba3408d02152706ba6c71536c32c37ced2a94644f4cbe3ef008d305",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
