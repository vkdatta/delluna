export const name="book-bold";
export const id="dl_46a301db5f2c4b17922f";
export const url=new URL("../icons/book-bold.svg?v=47885f7610879ef4cc835ed2e1f9945e03ee99cd8275bbcca69cd161dc4ac178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
