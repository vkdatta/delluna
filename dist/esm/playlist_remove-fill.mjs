export const name="playlist_remove-fill";
export const id="dl_0c09adcac082b7b90fe7";
export const url=new URL("../icons/playlist_remove-fill.svg?v=53ddfabbc1c2cd87190a55d8d9646ac620bf76bc20f21c6599635c7152b0368d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
