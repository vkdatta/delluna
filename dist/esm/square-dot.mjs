export const name="square-dot";
export const id="dl_7860a82d76de4c30963a";
export const url=new URL("../icons/square-dot.svg?v=8aa7e134d2a1cc0e14470a28185564ab953a81a3ee5e176e74835f626f8014fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
