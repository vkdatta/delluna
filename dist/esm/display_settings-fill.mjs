export const name="display_settings-fill";
export const id="dl_171efa52f2e33e0ec627";
export const url=new URL("../icons/display_settings-fill.svg?v=3fa17d6958e4d0cc0660f1be92da2ce79d836485b43aac5035560e29357ba9b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
