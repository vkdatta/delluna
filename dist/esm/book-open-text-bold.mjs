export const name="book-open-text-bold";
export const id="dl_65aec23e4a804876b78e";
export const url=new URL("../icons/book-open-text-bold.svg?v=a72a10d57d4416c670ddf9649cccc93cecae9be8507df8086f17b4aca7eff7eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
