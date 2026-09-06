export const name="book-open";
export const id="dl_351bba19e1eb4e6e8389";
export const url=new URL("../icons/book-open.svg?v=b38cdb3a15dcf00cfa4811e318b021e25c6a87b47acbb11888e16d107a5642da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
