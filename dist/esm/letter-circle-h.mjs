export const name="letter-circle-h";
export const id="dl_bfb25cc51be649ffa49d";
export const url=new URL("../icons/letter-circle-h.svg?v=2fdf24b59fc0fdca4de3b5ab0b58898116ed498ffde84f88a1a6cba91594a8fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
