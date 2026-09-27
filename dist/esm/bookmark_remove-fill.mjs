export const name="bookmark_remove-fill";
export const id="dl_b1c4154efe9c405c31d7";
export const url=new URL("../icons/bookmark_remove-fill.svg?v=8a720e899f388cee8b685c77429f828871bd9162f72d2bd4486159610bfe1dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
