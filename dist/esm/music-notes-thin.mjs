export const name="music-notes-thin";
export const id="dl_685843455522443486ea";
export const url=new URL("../icons/music-notes-thin.svg?v=5947dc744bf997e15a697549bdd345a64c094cbc7fbb30c90b1187efb4d25598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
