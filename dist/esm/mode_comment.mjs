export const name="mode_comment";
export const id="dl_c0a718390f19200b3014";
export const url=new URL("../icons/mode_comment.svg?v=16908dbce9c62c6e07ce021ba33800f0ad1c04579b44e0eec08dc3cf12d69f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
