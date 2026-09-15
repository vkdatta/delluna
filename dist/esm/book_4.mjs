export const name="book_4";
export const id="dl_f4d9bedc31b445df8380";
export const url=new URL("../icons/B/book_4.svg?v=b63c888e27cc1dbec42811e1a3c36092a1c085f90933531416dab39ddb885402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
