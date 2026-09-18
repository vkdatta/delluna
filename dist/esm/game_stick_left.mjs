export const name="game_stick_left";
export const id="dl_fd67511393e341b6ad63";
export const url=new URL("../icons/game_stick_left.svg?v=1eed09a4810647085950769b1609d148c4f8e9d9375226b3f6314a2f59b67070",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
