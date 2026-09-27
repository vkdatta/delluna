export const name="greater-than-or-equal-light";
export const id="dl_033b61063c84434c99e2";
export const url=new URL("../icons/greater-than-or-equal-light.svg?v=4b17e3fd899255c5f4d272551172d2546255a09f5b82c9f3b81d2577f06607ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
