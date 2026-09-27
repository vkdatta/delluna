export const name="text_format-fill";
export const id="dl_61bb209f4f3f08288f26";
export const url=new URL("../icons/text_format-fill.svg?v=3a6a020bddc0b324ed7d6c4f14858302ba4d8cba7f040cb06f67a95c725f4221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
