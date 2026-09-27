export const name="recent_actors";
export const id="dl_7df9314e14cf1aa58682";
export const url=new URL("../icons/recent_actors.svg?v=6d34e31883c0b0cd664af5fdf96348f241f85c8cc26dda0ed1ed491a3a7931a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
