export const name="smiley-sticker-thin";
export const id="dl_c15ba8f6d63322c68a5a";
export const url=new URL("../icons/smiley-sticker-thin.svg?v=fa931521a6a0b50b3d1b5d4b313422fda1068863c5fdc142dd5ebdaf3867b110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
