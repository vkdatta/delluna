export const name="lucid_2-image-play";
export const id="dl_2441777e769e4132bcf6";
export const url=new URL("../icons/lucid_2-image-play.svg?v=e570e3aca1ca6aba81ad5edd4fc57edf8c74050e3d397850329db16746269a5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
