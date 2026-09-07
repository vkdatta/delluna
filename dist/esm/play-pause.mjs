export const name="play-pause";
export const id="dl_a3a4cc9cda0744b7968f";
export const url=new URL("../icons/play-pause.svg?v=f15db5abc39fc4a296ff06eb01cd5b29a152609e4e091ff95dd38ae4cabf540d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
