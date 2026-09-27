export const name="format_text_overflow";
export const id="dl_c104d17997ad8dbb3d32";
export const url=new URL("../icons/format_text_overflow.svg?v=e81a312622cac3cadad6fdb93dfd0a79297209bbdb0239387a95bcc80056f2df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
