export const name="lucid_2-disc-album";
export const id="dl_28c89dd81ac34fb3aaf1";
export const url=new URL("../icons/lucid_2-disc-album.svg?v=abc8b8264e1600af039221b6f83033650e1cdc7230aa7c5e2ec293fe6ed33240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
