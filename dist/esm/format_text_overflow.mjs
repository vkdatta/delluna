export const name="format_text_overflow";
export const id="dl_b78bf302de1c7181c9a9";
export const url=new URL("../icons/format_text_overflow.svg?v=3fefa6749a89d19e8ad36a9c9371520800b8d34f7f8be855a59f687e25eb4457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
