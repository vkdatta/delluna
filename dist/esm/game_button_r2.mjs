export const name="game_button_r2";
export const id="dl_f69b4bf6514848a78325";
export const url=new URL("../icons/game_button_r2.svg?v=4d4cec582b76bb90705939f8683ac6d6a169ef8ea819fcc3142bab604e9cf7d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
