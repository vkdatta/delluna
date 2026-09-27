export const name="speaker_notes-fill";
export const id="dl_fcb84946855baa6d607a";
export const url=new URL("../icons/speaker_notes-fill.svg?v=8031b8d986b17557b4440d8f4de7a8d7cbd63c35b324af190578b86b2c6ff149",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
