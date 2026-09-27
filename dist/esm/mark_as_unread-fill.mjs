export const name="mark_as_unread-fill";
export const id="dl_8acceb1c74d3db78edda";
export const url=new URL("../icons/mark_as_unread-fill.svg?v=8d289acd0eaf4923afff07857daf9edbf2eea009d05fd1693df8717ac374d455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
