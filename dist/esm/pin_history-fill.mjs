export const name="pin_history-fill";
export const id="dl_77fd22756e56a22d4cb0";
export const url=new URL("../icons/pin_history-fill.svg?v=6972e5ee646a3e932d9d5198355dbcea7023980c60d1c8537cced3a657b3bdb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
