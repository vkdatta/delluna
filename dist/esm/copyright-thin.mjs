export const name="copyright-thin";
export const id="dl_a6850129784347318a72";
export const url=new URL("../icons/copyright-thin.svg?v=f0965b80dd913b5013d263d4904017fc2802ac31bbcde905ad664db877228472",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
