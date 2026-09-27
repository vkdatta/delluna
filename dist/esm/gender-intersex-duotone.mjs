export const name="gender-intersex-duotone";
export const id="dl_04595d7994c2406ab5f7";
export const url=new URL("../icons/gender-intersex-duotone.svg?v=da37d66c335f4d1e63742fc1c6dd373f7711fd31b40c935660eeae927ac68f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
