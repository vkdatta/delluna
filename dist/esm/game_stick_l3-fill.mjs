export const name="game_stick_l3-fill";
export const id="dl_9c7881dee9c8830ec28a";
export const url=new URL("../icons/game_stick_l3-fill.svg?v=18d29bd42e77880dbc7cbbfb8fdacadcf1454bfa7c0a3d9a0df992c2b085bc93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
