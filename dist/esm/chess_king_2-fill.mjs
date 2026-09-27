export const name="chess_king_2-fill";
export const id="dl_da5c763188d8e8e4b688";
export const url=new URL("../icons/chess_king_2-fill.svg?v=18ed3742269887e2b99e6e5b4f8653d5dc685892506432b4372c561326fd6657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
