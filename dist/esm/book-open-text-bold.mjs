export const name="book-open-text-bold";
export const id="dl_65aec23e4a804876b78e";
export const url=new URL("../icons/book-open-text-bold.svg?v=230e4750b192df38dee449fefb7b7de89c1d4ed258c662853bd9210ced5c1789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
