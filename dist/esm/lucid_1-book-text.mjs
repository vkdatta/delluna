export const name="lucid_1-book-text";
export const id="dl_638701c14ca6425e9f30";
export const url=new URL("../icons/lucid_1-book-text.svg?v=76e3429f5728d68d96694e59946e9af7603fb0c9e5e4f4854f658026588e559e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
