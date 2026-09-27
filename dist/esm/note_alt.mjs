export const name="note_alt";
export const id="dl_c0b26b5377f7d98c57a0";
export const url=new URL("../icons/note_alt.svg?v=26bef56a14e028b70d88d81573a4fc85ac8e7910384a5b6f332fdddab7dcb733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
