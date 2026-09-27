export const name="insert_page_break";
export const id="dl_60a6ff2731e815a88f4e";
export const url=new URL("../icons/insert_page_break.svg?v=22d82fe59cf59d2f55fd5b730efc28a3cd82116e6b4f1f94518669fe9570b703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
