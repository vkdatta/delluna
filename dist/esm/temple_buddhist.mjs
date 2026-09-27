export const name="temple_buddhist";
export const id="dl_cc0b55a9ae839b0bea0a";
export const url=new URL("../icons/temple_buddhist.svg?v=c7f4fe07c0c68058bfbf17824671e333f75665b5183739982461a6792b5e51d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
