export const name="play-pause-fill";
export const id="dl_53d51b4e93fa4f54a4d3";
export const url=new URL("../icons/play-pause-fill.svg?v=d9af5a6e38df4a0fb90132189ebd4eadb4e1c943444551fa4587572f74c31daf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
