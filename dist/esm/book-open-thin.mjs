export const name="book-open-thin";
export const id="dl_84c88ecc380b42be9231";
export const url=new URL("../icons/book-open-thin.svg?v=d05a6006912eb365951478a2a1d97c117148509a03bd8bbed98744b4eb1836f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
