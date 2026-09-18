export const name="game_bumper_right";
export const id="dl_fe9810eb527645779cbc";
export const url=new URL("../icons/game_bumper_right.svg?v=dc1fd8c1dd2b7d9aaf1ff866e1498c4ea6b6dad4776587e7990f0eddb2fcba7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
