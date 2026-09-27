export const name="lucid_2-ghost";
export const id="dl_d3a9e1ac346b4854a830";
export const url=new URL("../icons/lucid_2-ghost.svg?v=79cc0d8295bf94882638732ec605d9d8a6b5f0def71628275d363d12ded2cc49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
