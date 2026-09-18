export const name="game_stick_right-fill";
export const id="dl_14a01de9714044fa8b46";
export const url=new URL("../icons/game_stick_right-fill.svg?v=77138071c0e7ba8a7306368739e8236833ca43c943478c327dd7cb8de9d86b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
