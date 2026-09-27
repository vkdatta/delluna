export const name="lucid_1-circle-dot";
export const id="dl_12b67f9146014f2098ad";
export const url=new URL("../icons/lucid_1-circle-dot.svg?v=9097db313bdd26926988eba7cf692051f10f375d1fdcc6b604781962fec2faa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
