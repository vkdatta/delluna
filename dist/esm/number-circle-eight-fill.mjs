export const name="number-circle-eight-fill";
export const id="dl_971d7e8cd15548a7b21e";
export const url=new URL("../icons/number-circle-eight-fill.svg?v=e645969e141c3e1c70fb10429733b0ee4cfd4fa35c1d7d4c3a08c24f66add000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
