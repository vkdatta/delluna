export const name="hourglass-low-fill";
export const id="dl_16ebab0ed117468aa84d";
export const url=new URL("../icons/hourglass-low-fill.svg?v=83ec58eba0e6480c4fffecbace5dfa52281d26a38c4de7459892199ad2e5c463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
