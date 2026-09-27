export const name="lucid_2-eclipse";
export const id="dl_f9ab737aa01b4350ad34";
export const url=new URL("../icons/lucid_2-eclipse.svg?v=d931be01a35f5c95287f247b8109cbb456d2f4907759343275f2b1d41610c0d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
