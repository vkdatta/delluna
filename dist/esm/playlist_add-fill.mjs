export const name="playlist_add-fill";
export const id="dl_24962ee5acacd0a27b4c";
export const url=new URL("../icons/playlist_add-fill.svg?v=7381defa9f594c058b03b9d4dc40a90a89c4617c70a7b2e3100bd7866833ac14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
