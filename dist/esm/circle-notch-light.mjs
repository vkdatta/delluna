export const name="circle-notch-light";
export const id="dl_3f208599b89c4107bbe7";
export const url=new URL("../icons/circle-notch-light.svg?v=63a5b42f072df46a0d2b8c4e45932fdb7b5ecc660339855626066deb1b616389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
