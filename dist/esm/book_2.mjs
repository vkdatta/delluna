export const name="book_2";
export const id="dl_04cef72482d655a07c2d";
export const url=new URL("../icons/book_2.svg?v=332816839bfa85505a64386375b1b8cdeb7156c4c4277ea685f668035db31b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
