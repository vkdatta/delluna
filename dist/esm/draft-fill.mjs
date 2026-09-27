export const name="draft-fill";
export const id="dl_aef004c156ac57a50eea";
export const url=new URL("../icons/draft-fill.svg?v=ad8eac57973d63d6762d7cb1d33287a3e2d637b939b6854da0106274e9c22022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
