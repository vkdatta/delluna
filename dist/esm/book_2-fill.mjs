export const name="book_2-fill";
export const id="dl_c284e36b3152f411519f";
export const url=new URL("../icons/book_2-fill.svg?v=eaefaf598872a587f2ab6a9065f0926a02173ea968f084419b7c01659a4cd375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
