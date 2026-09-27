export const name="play-fill";
export const id="dl_c74cfe49492a4d9a8a4a";
export const url=new URL("../icons/play-fill.svg?v=776fd221a68ab050a16ca3c575f9dd3acc4e58a375b730298fd91a745dce2554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
