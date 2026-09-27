export const name="currency-kzt-thin";
export const id="dl_b8c77104dd4d4e7b823f";
export const url=new URL("../icons/currency-kzt-thin.svg?v=dabf144691eba25cc78aa42b03b14e639293649d0f45041f2dd228158a15bef9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
