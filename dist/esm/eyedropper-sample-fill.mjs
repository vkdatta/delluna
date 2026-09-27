export const name="eyedropper-sample-fill";
export const id="dl_c619eaa41c7a4b9cb41c";
export const url=new URL("../icons/eyedropper-sample-fill.svg?v=919a771a5fa6af7ff39727b37bc5c94abfa6b15cc52db8e485729fca5c980e7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
