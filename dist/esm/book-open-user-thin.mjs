export const name="book-open-user-thin";
export const id="dl_ae98eeb22b7b4972816b";
export const url=new URL("../icons/book-open-user-thin.svg?v=d487d50cefc509ef694385cb947062887a5db97e7c6b5dfa4c818815cb26d902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
