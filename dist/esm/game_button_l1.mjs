export const name="game_button_l1";
export const id="dl_b19a8f651376469d9ada";
export const url=new URL("../icons/G/game_button_l1.svg?v=2f7496bb4b7752a2ced211a1ffddaeba33aa6d3f92a659dcdf54df694f7bd641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
