export const name="tv_next";
export const id="dl_3d0b9bf81847fbd55daf";
export const url=new URL("../icons/tv_next.svg?v=288db6675871749d8015de7c63af2d7203a22640ef23f0b21d94601a878be2b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
