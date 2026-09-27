export const name="selection-inverse-duotone";
export const id="dl_43078ecc550c21d90bfb";
export const url=new URL("../icons/selection-inverse-duotone.svg?v=71b6ab8eb1d487426dac823ca268ba2002e113dfa7cebc9957fb7c7d6d678b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
