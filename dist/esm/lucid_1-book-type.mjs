export const name="lucid_1-book-type";
export const id="dl_a03602bf3da34d01be0d";
export const url=new URL("../icons/lucid_1-book-type.svg?v=98ae7cffa2dd6152b0cad76ff8f7e68baddc6e4b8729b4144ec0dddfcd537855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
