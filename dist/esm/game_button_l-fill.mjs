export const name="game_button_l-fill";
export const id="dl_e7675761f1b8478cba55";
export const url=new URL("../icons/G/game_button_l-fill.svg?v=838fd7575bcd052e33e09ba346cdcaf50951ff85e45c3b3101d61afe630293fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
