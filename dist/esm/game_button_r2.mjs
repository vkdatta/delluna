export const name="game_button_r2";
export const id="dl_20cd17b6d36983ac71c2";
export const url=new URL("../icons/game_button_r2.svg?v=523dd01e3033fd09724333314082b08f47570ff9d3a36397fd045bdb6fdc672e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
