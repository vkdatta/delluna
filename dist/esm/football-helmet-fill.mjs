export const name="football-helmet-fill";
export const id="dl_db3590c464694d409af9";
export const url=new URL("../icons/football-helmet-fill.svg?v=c9b1636e18ebf823f89f30bfc721824cc638a3d6e22aac62015ca966027e94a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
