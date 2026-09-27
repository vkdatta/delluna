export const name="edit_road";
export const id="dl_59b368e011029311ac07";
export const url=new URL("../icons/edit_road.svg?v=6a7a854c39e0622e0b77a5a36fa2355526f6aeb561e5ca9704d93178a00c2230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
