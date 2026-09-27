export const name="note-pencil-fill";
export const id="dl_c1199b621276455cb17d";
export const url=new URL("../icons/note-pencil-fill.svg?v=a347fc9aa34623dc7d7a18700b8ca41585703bc7a1b52b7c87613e8e8eaec772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
