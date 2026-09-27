export const name="match_word-fill";
export const id="dl_3cded4dbf5ed3276dfd7";
export const url=new URL("../icons/match_word-fill.svg?v=fa5447cdaadf6f5023bb2af3367229555edb6e4596e40afe34aca3d79e05fb03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
