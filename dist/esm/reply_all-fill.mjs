export const name="reply_all-fill";
export const id="dl_21fa1af29c22781f74ee";
export const url=new URL("../icons/reply_all-fill.svg?v=9c18f3bdc29f7aa53d5850c751ed69b7c3b5a98ae90c2a562d3c1739fc3038ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
