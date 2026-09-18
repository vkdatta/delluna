export const name="skip_next";
export const id="dl_c67c5671d4444fb88a8e";
export const url=new URL("../icons/skip_next.svg?v=f2a130ad478f6266527cbf7e373c15e9e750be88b3a8f86edbe1e8c74e555d14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
