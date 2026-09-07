export const name="book-open-thin";
export const id="dl_84c88ecc380b42be9231";
export const url=new URL("../icons/book-open-thin.svg?v=8ef40f482660a20aae312217c12859c17458d8ee63712e4643422db563b5814f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
