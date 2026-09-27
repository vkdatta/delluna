export const name="menu_book-fill";
export const id="dl_6a75f363a7007e14a47d";
export const url=new URL("../icons/menu_book-fill.svg?v=cf71720ecb7b09194cc621a11088b6afced2e840068071f846f4427fdaabda6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
