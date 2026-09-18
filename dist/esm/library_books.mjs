export const name="library_books";
export const id="dl_2bf1b06e96d1408da9bd";
export const url=new URL("../icons/L/library_books.svg?v=839bc35356238e44d5c926ecf655f4e2171fcbf3c9ff6be1974941351f19d458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
