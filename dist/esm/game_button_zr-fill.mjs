export const name="game_button_zr-fill";
export const id="dl_bf60fb28f1c64b56ba6f";
export const url=new URL("../icons/G/game_button_zr-fill.svg?v=558fad7ce1bd03ba2014cde0c26983a49645cf8684379b7aaee79696bd6e3c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
