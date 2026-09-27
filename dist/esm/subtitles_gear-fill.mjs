export const name="subtitles_gear-fill";
export const id="dl_9e216920a5a01e457235";
export const url=new URL("../icons/subtitles_gear-fill.svg?v=185ffd3aec30ee91af81918620521c25b44165cadb040628c3402b801609777a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
