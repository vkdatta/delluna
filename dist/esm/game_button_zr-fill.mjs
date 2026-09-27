export const name="game_button_zr-fill";
export const id="dl_8da9394b88edd559b813";
export const url=new URL("../icons/game_button_zr-fill.svg?v=9620fc99ce33713b3e5cd9f37011678044be978450ca455b11b98fd39f436e1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
