export const name="heart-half-light";
export const id="dl_e067b54456d946199150";
export const url=new URL("../icons/heart-half-light.svg?v=11cea591263186b498395998ce0fd47933a932a783dc43cc6833097aa6581377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
