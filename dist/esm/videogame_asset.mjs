export const name="videogame_asset";
export const id="dl_c76287e2ac4b3b5e5396";
export const url=new URL("../icons/videogame_asset.svg?v=40041212d93989bb86f43ff2f6a60e7e18704d4d7770a7e2cb79cc110fedc7a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
