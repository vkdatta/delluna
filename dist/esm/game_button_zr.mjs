export const name="game_button_zr";
export const id="dl_a540c360524a7f3f1fca";
export const url=new URL("../icons/game_button_zr.svg?v=c9022ff71dc5ece89f0995f507664f87f77e0abd922ed03d165cd8d2838203df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
