export const name="lucid_1-book-open-text";
export const id="dl_9c830b3bf959432f9576";
export const url=new URL("../icons/lucid_1-book-open-text.svg?v=8a47a20e2cc136927d1e7b2d976c3c64cbffb9b162e4a446f14920533e27f730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
