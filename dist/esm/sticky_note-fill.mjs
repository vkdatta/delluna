export const name="sticky_note-fill";
export const id="dl_9e6f02852ede44aba9cc";
export const url=new URL("../icons/S/sticky_note-fill.svg?v=8f07e514e0748bda4249d53bade583cee104e9ece1983de9c2dd31e7a030a524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
