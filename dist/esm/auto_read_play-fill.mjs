export const name="auto_read_play-fill";
export const id="dl_ae3dd000e60700b58412";
export const url=new URL("../icons/auto_read_play-fill.svg?v=7acab6658393ec24e0a8438b3ba1b47baf6abe3ff2317c8ca56c4f65c3c091d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
