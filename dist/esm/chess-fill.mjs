export const name="chess-fill";
export const id="dl_17c054918c1a785da697";
export const url=new URL("../icons/chess-fill.svg?v=3fa69170c053b21664782d6881a2aaf10e1b1370aa73db30a4a78e3cc664db79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
