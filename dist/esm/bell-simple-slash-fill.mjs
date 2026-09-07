export const name="bell-simple-slash-fill";
export const id="dl_8f8f7d2e8a55483186c2";
export const url=new URL("../icons/bell-simple-slash-fill.svg?v=fea0b4e27ec78332b89545f1bcd9a26f5ca3afd03942fc7289040931641276f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
