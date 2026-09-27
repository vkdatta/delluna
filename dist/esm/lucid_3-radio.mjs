export const name="lucid_3-radio";
export const id="dl_a642c989a50b414da657";
export const url=new URL("../icons/lucid_3-radio.svg?v=241b369e450a684656ea983efc18888409d8b0259477236703aa2bdff2e485fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
