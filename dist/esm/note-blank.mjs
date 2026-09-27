export const name="note-blank";
export const id="dl_c4b3185d57b747ee87e9";
export const url=new URL("../icons/note-blank.svg?v=e8fc50018886f0009bf9947d62a3245a487992e2a7634d29723097bc57a7dc2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
