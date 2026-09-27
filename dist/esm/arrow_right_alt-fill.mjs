export const name="arrow_right_alt-fill";
export const id="dl_d5fdc2ea90e43b8bdaa2";
export const url=new URL("../icons/arrow_right_alt-fill.svg?v=17f4e880ad840fc54830579e273d06a1830bbe518dda69f1d2dc22cb3eef4bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
