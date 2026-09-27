export const name="lucid_2-iteration-ccw";
export const id="dl_953dbc6fe9f146cbbf49";
export const url=new URL("../icons/lucid_2-iteration-ccw.svg?v=f9132643baa81034d7d71c4bfe6077afcb8450636aa53dccc6f878f6b6332c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
