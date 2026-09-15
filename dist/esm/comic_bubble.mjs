export const name="comic_bubble";
export const id="dl_e7ba9c415ecf4a6a9495";
export const url=new URL("../icons/C/comic_bubble.svg?v=3a1fed95857d48b94c2673a6899bca436a001e405a14d84fd1f7e26320951c4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
