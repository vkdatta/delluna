export const name="music_note-fill";
export const id="dl_983f5003f7b9a7da2fd1";
export const url=new URL("../icons/music_note-fill.svg?v=00fd3b8e33324a10474abd31d1d3e472eff4f075f4abeaaae64abce1d55f6c49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
