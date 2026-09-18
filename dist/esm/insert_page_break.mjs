export const name="insert_page_break";
export const id="dl_a9376827e7e64660ba53";
export const url=new URL("../icons/insert_page_break.svg?v=9119beab78a0d0387b96739cbf1b1e27197d57eae53d73fc222c4af46ed0cba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
