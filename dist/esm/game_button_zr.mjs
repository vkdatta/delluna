export const name="game_button_zr";
export const id="dl_2395dea1c49b83233751";
export const url=new URL("../icons/game_button_zr.svg?v=6f78860597b16084a2250801b730465b5efc0f9b8fd40bcc5a7d9a3ff5b54cf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
