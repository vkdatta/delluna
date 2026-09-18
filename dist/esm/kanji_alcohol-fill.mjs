export const name="kanji_alcohol-fill";
export const id="dl_6f7ffbb9697344148242";
export const url=new URL("../icons/kanji_alcohol-fill.svg?v=371c4158892cf64a3db2a9d4126c2ce6786b0157ac9cf89afcb406f7a989b19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
