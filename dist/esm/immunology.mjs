export const name="immunology";
export const id="dl_583fc086f6a15fc50567";
export const url=new URL("../icons/immunology.svg?v=29d0474246d86f9f18308fbb1f0fcb87a3bfcaa79780325532e4ab0ab51daf99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
