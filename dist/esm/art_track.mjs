export const name="art_track";
export const id="dl_231a98ec6294acb0b7b5";
export const url=new URL("../icons/art_track.svg?v=1ec74fc44bc2e87f72929679b4c4ab9fcce5dd4700cb3671f1f50f7dfe483379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
