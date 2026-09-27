export const name="music-note-bold";
export const id="dl_50ff487b357c4c2e8e13";
export const url=new URL("../icons/music-note-bold.svg?v=2afea18ba0e737c99fa3872b79b100ca6b32ae70c2a45852c32523cba7c20bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
