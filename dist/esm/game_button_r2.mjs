export const name="game_button_r2";
export const id="dl_9c122a3a9e9d555e57fa";
export const url=new URL("../icons/game_button_r2.svg?v=0cdb2015007bbcb46062c75243b7f2bdd3967b4ebab4a1135da264bcb519ea22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
