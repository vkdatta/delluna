export const name="option-fill";
export const id="dl_8ef5a83e9e4e46c89b38";
export const url=new URL("../icons/option-fill.svg?v=5d1d6eef235068de888815c8ab3c6ce902a2d68ccfe88daf6eb1aabd42ada142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
