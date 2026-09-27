export const name="flatware";
export const id="dl_b8daf1c6b43485bd480d";
export const url=new URL("../icons/flatware.svg?v=910c149f859c0c4453f0305dcd2ce18f538b0d40cc60356fb126a7756be593bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
