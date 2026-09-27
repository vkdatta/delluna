export const name="bookmark_flag-fill";
export const id="dl_dff302beb7980821c856";
export const url=new URL("../icons/bookmark_flag-fill.svg?v=944cd79f66a2f8ed011783390222a8abadecdaa4c57b1d9bfaa0047734ffd415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
