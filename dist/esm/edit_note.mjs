export const name="edit_note";
export const id="dl_47817d83b9d8466d9870";
export const url=new URL("../icons/edit_note.svg?v=070ba4ca6aae255f4fd0fd63c144e0cb5ff43537d224280ad2671bc8ca739e8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
