export const name="music_note_2-fill";
export const id="dl_a561f43b216c8b5d3b1f";
export const url=new URL("../icons/music_note_2-fill.svg?v=df8d458e72b74675fdc4dd36ca5533f8f40f3b33b01865a8c537b1871b1add63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
