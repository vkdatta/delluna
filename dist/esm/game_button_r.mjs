export const name="game_button_r";
export const id="dl_643bc5e715008b63b411";
export const url=new URL("../icons/game_button_r.svg?v=7fc382ad7508ba6f4a00f1c106669d95171f3d9e78b2eb9e50b393ea2914c17a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
