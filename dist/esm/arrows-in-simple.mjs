export const name="arrows-in-simple";
export const id="dl_1338693d412244a9b6a6";
export const url=new URL("../icons/arrows-in-simple.svg?v=07f22540ba343ad71cb9afab17d3bf62c1475c899a1ba6379bcafb738c7a750f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
