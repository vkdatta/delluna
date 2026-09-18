export const name="washoku-fill";
export const id="dl_a314c47b8b5640e9b275";
export const url=new URL("../icons/W/washoku-fill.svg?v=5cb65aed290d7021ac548e6d0f5b0a6da1f6679ff41def8ddc352cfb2ca62998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
