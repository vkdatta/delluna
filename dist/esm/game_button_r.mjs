export const name="game_button_r";
export const id="dl_0e7d92c92b214235b5ce";
export const url=new URL("../icons/G/game_button_r.svg?v=eb230d7d4d1e612f54cd39d91297dcee4a3788d8affd69ef8216831091006e04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
