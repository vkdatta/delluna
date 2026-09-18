export const name="language_japanese_kana-fill";
export const id="dl_0ce1e29efd8a4ba1bdad";
export const url=new URL("../icons/L/language_japanese_kana-fill.svg?v=c162d1aaa1ffdc9846a97a093e4b446ae81e58cb16b7e6929e6fbe1f29fdc456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
