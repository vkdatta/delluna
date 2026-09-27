export const name="lucid_1-bluetooth-searching";
export const id="dl_5ab9741d25e241759ee4";
export const url=new URL("../icons/lucid_1-bluetooth-searching.svg?v=563677b22771eb1aae58298f4ec290c4b1e0b091b33dbb705f314e139d25dc9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
