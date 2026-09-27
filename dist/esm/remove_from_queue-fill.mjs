export const name="remove_from_queue-fill";
export const id="dl_c0a1c0ba4e5955913e4b";
export const url=new URL("../icons/remove_from_queue-fill.svg?v=b7d2dec46db11b97fa208a361638ae792b994a4b18d6c6af84173a5f7ae9631f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
