export const name="music-note-fill";
export const id="dl_cc74d46ff07d43a59dd4";
export const url=new URL("../icons/music-note-fill.svg?v=948ea300b48de7f374e009ffe49924d8bd975b5eb4c2b7e09481ac07a0e504bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
