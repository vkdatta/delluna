export const name="hand-pointing";
export const id="dl_7f96f4ecb95c4818bb64";
export const url=new URL("../icons/hand-pointing.svg?v=9235b054ee1048473dfe8dbd7750cf85f61e1e86024b0db62e5c10d8a8da1c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
