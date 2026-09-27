export const name="user-light";
export const id="dl_30f0aedc7b705088ee15";
export const url=new URL("../icons/user-light.svg?v=4c4a79dcfd1681ee275de5ee1cebad1357f35e676f6d3c55de58c41ac8df5c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
