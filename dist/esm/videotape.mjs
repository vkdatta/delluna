export const name="videotape";
export const id="dl_df8d35336c4d4499a6be";
export const url=new URL("../icons/videotape.svg?v=86e09870c22dbddc7624e3e6ce906596489586e22de2b8be856b2796c3d35e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
