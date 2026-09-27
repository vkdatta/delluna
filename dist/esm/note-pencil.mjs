export const name="note-pencil";
export const id="dl_7f7a6cfca1d74fc084c6";
export const url=new URL("../icons/note-pencil.svg?v=795f517e40f578674f8cd1c45f3808afff982bf677937537f9a8a0b4829b5683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
