export const name="media_output-fill";
export const id="dl_32290f4f5d097d3e0ad1";
export const url=new URL("../icons/media_output-fill.svg?v=09e7ca4ddcc3ce6400fa313a836a6c86c5f1a73783797b8446d952cfe0d0712a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
