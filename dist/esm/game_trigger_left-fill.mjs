export const name="game_trigger_left-fill";
export const id="dl_8da4f8847b9eb794e9c3";
export const url=new URL("../icons/game_trigger_left-fill.svg?v=91000f1348f9fb17fd5953222bdf4c9a739975bdbe194d24bda3b2f6337ceac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
