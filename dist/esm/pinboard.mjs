export const name="pinboard";
export const id="dl_684d513169ec424fa650";
export const url=new URL("../icons/P/pinboard.svg?v=108a7cc1df11921ab092021688813e90c800dc6e060c6b3536bf06992dc4cafe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
