export const name="window-fill";
export const id="dl_92b44a8f0cc51bce81c8";
export const url=new URL("../icons/window-fill.svg?v=1e22bf330fb0baf4720905cd271c5a8f062ed97150dc51ff54fdbfaf071c2b29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
