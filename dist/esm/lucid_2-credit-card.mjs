export const name="lucid_2-credit-card";
export const id="dl_7ac68abdf83f4762862e";
export const url=new URL("../icons/lucid_2-credit-card.svg?v=d231c089334df3d65e9b678d1ff535abf6410d1713bc207b53fea1a4b90d60b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
