export const name="traffic-cone-light";
export const id="dl_89809c5fcd1440c1fe4d";
export const url=new URL("../icons/traffic-cone-light.svg?v=67bb3681eb8acba5f6f34ecc945400b012ed10ed424971b8d4a9b60b404e939b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
