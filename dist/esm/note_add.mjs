export const name="note_add";
export const id="dl_df80059953f58446eace";
export const url=new URL("../icons/note_add.svg?v=8d760f586a50793af719cfb539ca64f531e73a91cfbc316049ecdb1d95fd9698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
