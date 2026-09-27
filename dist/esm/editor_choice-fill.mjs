export const name="editor_choice-fill";
export const id="dl_c952b2b130df73dec17d";
export const url=new URL("../icons/editor_choice-fill.svg?v=0742b8c005bf7db818a8d776887fb7e8c3bcdf67dbf52aa205745e807d29412d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
