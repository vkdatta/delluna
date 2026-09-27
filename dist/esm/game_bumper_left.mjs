export const name="game_bumper_left";
export const id="dl_fd0e9a469ed8283ff00a";
export const url=new URL("../icons/game_bumper_left.svg?v=1aedd1294fc7f58f36e9c56d6ef95df06be2326b453b3ea7995157df5ead9837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
