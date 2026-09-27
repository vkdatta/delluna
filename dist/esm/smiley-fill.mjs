export const name="smiley-fill";
export const id="dl_03c71aa2b25c7177fd4c";
export const url=new URL("../icons/smiley-fill.svg?v=515f1cf7608edec30cb44573fb104fe003cc640308b5b783c917d899ae02564c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
