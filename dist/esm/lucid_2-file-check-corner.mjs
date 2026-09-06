export const name="lucid_2-file-check-corner";
export const id="dl_9203d4843f2f404e86a7";
export const url=new URL("../icons/lucid_2-file-check-corner.svg?v=7ce4be069c48f23f442dace93e9cf971c2b28e19e4ad49e446dc260eb9fa8c4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
