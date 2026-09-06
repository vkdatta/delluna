export const name="compass-rose-light";
export const id="dl_15c7a4ea74fd4f7bbb8d";
export const url=new URL("../icons/compass-rose-light.svg?v=9bf69924690d12c71425fdff25e8f87ff80ac02ed5d7b4f1d3428621a5185fad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
