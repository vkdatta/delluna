export const name="fmd_bad-fill";
export const id="dl_f0f7437a89b24614a379";
export const url=new URL("../icons/F/fmd_bad-fill.svg?v=16ca9acf388f4188750bd0317e86823ba8fbdbde6dd054c136df07e8dcfc06e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
