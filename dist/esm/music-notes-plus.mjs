export const name="music-notes-plus";
export const id="dl_a7d72c8698864c87b262";
export const url=new URL("../icons/music-notes-plus.svg?v=bfd5aa82f30317c495406be93e6932a3cbbc6ea7811aa33b3837fc8554c920a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
