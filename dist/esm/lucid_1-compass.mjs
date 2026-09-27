export const name="lucid_1-compass";
export const id="dl_2685ce46ba2746bdabf7";
export const url=new URL("../icons/lucid_1-compass.svg?v=f5566118d4afe1b716b467a5fff3949e8852bae68df83f649c711c0bc40584ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
