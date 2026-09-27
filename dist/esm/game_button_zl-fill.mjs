export const name="game_button_zl-fill";
export const id="dl_b4a118a2a1f251f863bc";
export const url=new URL("../icons/game_button_zl-fill.svg?v=546f2e3b8be1b90512fe7e478faed0755cacfa99257c7ea23afe13e428f9c5a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
