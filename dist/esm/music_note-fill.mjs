export const name="music_note-fill";
export const id="dl_816f7acd855c1f819a60";
export const url=new URL("../icons/music_note-fill.svg?v=6c3e3023bcfde008e9e2616e23fe967173023c0f659429729a6b2af24f740f45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
