export const name="library_books";
export const id="dl_cb93153b416dc7acbced";
export const url=new URL("../icons/library_books.svg?v=220f022e7b5a9ae93ae98c9348044777e42efafa4b1e73d95e74d2042a845a5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
