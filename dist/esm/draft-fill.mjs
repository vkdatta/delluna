export const name="draft-fill";
export const id="dl_1ecd3c6cd61128d8133c";
export const url=new URL("../icons/draft-fill.svg?v=b1643193e8cb7fc8135f71a49e3a4b6835493623392e3b45e1f2d60413b04a98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
