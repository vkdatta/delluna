export const name="detective";
export const id="dl_53b25138fe55473ba84f";
export const url=new URL("../icons/detective.svg?v=17e3e462bbedf5b8b6b56cb7cbfab11a083b74b0fbe7597def16d1930e93efa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
