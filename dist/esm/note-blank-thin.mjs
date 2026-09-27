export const name="note-blank-thin";
export const id="dl_fcd43b5474464742a417";
export const url=new URL("../icons/note-blank-thin.svg?v=d53373c256eec81410a692a5c47efc62e74cc4dfff4e1af7549a38e169eedbdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
