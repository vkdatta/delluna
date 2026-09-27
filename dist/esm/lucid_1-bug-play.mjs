export const name="lucid_1-bug-play";
export const id="dl_e95dcbc0f6ff4fca9f44";
export const url=new URL("../icons/lucid_1-bug-play.svg?v=097fffd5da6e840e9d960bc96f4676dfb6ae8d61e17d927fbc658c398261fdd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
