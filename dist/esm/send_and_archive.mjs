export const name="send_and_archive";
export const id="dl_32b295e81a366e0132a0";
export const url=new URL("../icons/send_and_archive.svg?v=7ae043a330398dfcd37c06e8bd45730fcd839a6a59ff05a8c8ebed585b52c91e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
