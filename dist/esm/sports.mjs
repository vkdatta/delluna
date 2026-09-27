export const name="sports";
export const id="dl_11c181c4b66e11343938";
export const url=new URL("../icons/sports.svg?v=7f7a1418e4db5b3e25a20a7154c89c3e013fbcd5efb1f2777a68888600e3e6f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
