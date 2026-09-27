export const name="game_stick_l3";
export const id="dl_1f87d2ac912742b9943a";
export const url=new URL("../icons/game_stick_l3.svg?v=9d93a8af6e3d5a9080829ef696f5a56aceb5554df2df8de654c75be5d3a71910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
