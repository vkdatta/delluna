export const name="lucid_3-settings";
export const id="dl_a413bcedb4d94f1faae7";
export const url=new URL("../icons/lucid_3-settings.svg?v=cd2311128db09b946f6d2994b47a4dda2361de7947441833422dd8a5842ebadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
