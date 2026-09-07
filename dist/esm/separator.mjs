export const name="separator";
export const id="dl_02f009b66c204feea951";
export const url=new URL("../icons/separator.svg?v=d73b02b10bdbe0e7f4024095d6b989e071786c832782ae5fd1d766c5b8b3befa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
