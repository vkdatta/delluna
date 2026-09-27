export const name="queue_play_next";
export const id="dl_eaf520730da54e4a2937";
export const url=new URL("../icons/queue_play_next.svg?v=139481fba8e1afa7a89af49e58efa21dd42adfefc815342b10cd872cc4795922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
