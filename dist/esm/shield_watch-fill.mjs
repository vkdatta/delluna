export const name="shield_watch-fill";
export const id="dl_0235447d774e8f104b13";
export const url=new URL("../icons/shield_watch-fill.svg?v=7b3cf3c1627a8fc943b7ea4fb2076b5c5a7f18d7a1c2cea7264e2223c7ddc863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
