export const name="plus-minus-fill";
export const id="dl_971b891feaa44c23b17d";
export const url=new URL("../icons/plus-minus-fill.svg?v=58c4989636ed62c97ae271521eaf4f741ced691eca7719a80e78d258d17e6403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
