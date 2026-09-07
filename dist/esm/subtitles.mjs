export const name="subtitles";
export const id="dl_0e5190e0078f4ee5939f";
export const url=new URL("../icons/S/subtitles.svg?v=830b60f447804704071506de91ee161dd721813d795968faaa5a42be85e88cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
