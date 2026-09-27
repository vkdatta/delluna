export const name="music-note-light";
export const id="dl_5bafdcbd2e044a62bdfe";
export const url=new URL("../icons/music-note-light.svg?v=37caf6dd41582f7d2da678ba6e84e9d3904f3c2207892f2d48efb7c30840cd1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
