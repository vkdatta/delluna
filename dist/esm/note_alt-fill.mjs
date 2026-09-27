export const name="note_alt-fill";
export const id="dl_66554beb4c239b002f0b";
export const url=new URL("../icons/note_alt-fill.svg?v=fe7b95aa1a8d1c9877fcdf97edd3b6e3ecee74fea1133b91eb5d09c272b5e2fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
