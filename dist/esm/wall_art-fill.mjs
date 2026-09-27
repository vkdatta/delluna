export const name="wall_art-fill";
export const id="dl_ebccd0e1a4cc342c39b4";
export const url=new URL("../icons/wall_art-fill.svg?v=b88e8c0a67a6ad8d5c2b4e5b3946003c462c17f775ef6badb106181c29658033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
