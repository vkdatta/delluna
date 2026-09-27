export const name="crown-simple-duotone";
export const id="dl_5b11b24c6eae40b98e2f";
export const url=new URL("../icons/crown-simple-duotone.svg?v=6be6ab4a7a9655b51e4635c5ba5884a68fcb9e7727d6d456d9ad84b480869228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
