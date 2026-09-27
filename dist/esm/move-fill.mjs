export const name="move-fill";
export const id="dl_448b0f48c2f3acb83468";
export const url=new URL("../icons/move-fill.svg?v=311be865b61e260c3f0276affbcd885a70744e92421c5c580887944c33f7143e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
