export const name="note-blank";
export const id="dl_c4b3185d57b747ee87e9";
export const url=new URL("../icons/note-blank.svg?v=5052d1424bc11695734b3ab22f84de1d4de28ba1e9d76dbce35f28dc978a9ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
