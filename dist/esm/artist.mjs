export const name="artist";
export const id="dl_a0b0d4d71c7f4eceadcb";
export const url=new URL("../icons/artist.svg?v=ba086caa4edea1d14d5d311420c11b32717783d9d6d0b66843b32108667d97f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
