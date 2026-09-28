export const name="open_in_full";
export const id="dl_450ef3979f7a7ef57bf5";
export const url=new URL("../icons/open_in_full.svg?v=2962abe13fe45da5293fdf6f9e0fb0eacc8b66f060ee0e05287b1e22476d1062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
