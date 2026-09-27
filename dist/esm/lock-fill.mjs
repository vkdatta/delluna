export const name="lock-fill";
export const id="dl_5c9e17d625ebf4be0ea2";
export const url=new URL("../icons/lock-fill.svg?v=b67f68c13fb38473aba4d68498c3fbdfe431653a7082ebce05e92ac868a73b64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
