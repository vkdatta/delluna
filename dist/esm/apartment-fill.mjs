export const name="apartment-fill";
export const id="dl_5eb574fbe4704fb8a6a3";
export const url=new URL("../icons/apartment-fill.svg?v=94f5e3bb8ba9e4b5e19a77bea346cb0a126bf19604bafb431697a7ae81171b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
