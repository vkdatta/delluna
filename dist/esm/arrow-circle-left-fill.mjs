export const name="arrow-circle-left-fill";
export const id="dl_027a21229d244685bdd8";
export const url=new URL("../icons/arrow-circle-left-fill.svg?v=f51849c67861d2b3d9d8bd919e486052a6015ed6a40f076dfb4afb9237e94c49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
