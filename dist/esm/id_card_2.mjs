export const name="id_card_2";
export const id="dl_159c9692c8d658c485ca";
export const url=new URL("../icons/id_card_2.svg?v=fdda727bc5be93ef0e5958c17a1481ba2af30378fc43cee9c835e33522d81f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
