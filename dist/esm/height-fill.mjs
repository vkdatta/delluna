export const name="height-fill";
export const id="dl_6ae616e38fe61971d795";
export const url=new URL("../icons/height-fill.svg?v=9994865e906ea2df1dafbd36ef7ec7ecbb886b2cd2a2e91e6b3103dbdac3027c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
