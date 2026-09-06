export const name="lucid_1-chess-king";
export const id="dl_838c5cfde9a647c88ad3";
export const url=new URL("../icons/lucid_1-chess-king.svg?v=59ac28deaf198a645cdb9c1d5c34ad14c96741edb34000ca1e48f23f75e2b825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
