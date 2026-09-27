export const name="grid-nine";
export const id="dl_7305cbf17d1a40f28e11";
export const url=new URL("../icons/grid-nine.svg?v=559c36eef051d73635f9a2cb9131d731f722a52a7490b254d638d0ace3f66857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
