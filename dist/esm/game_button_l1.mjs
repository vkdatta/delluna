export const name="game_button_l1";
export const id="dl_bb8be69a876e527168f2";
export const url=new URL("../icons/game_button_l1.svg?v=6b77372ac64d6d70dd92c8ea6c4f10eb95d9f292b2948e5bff433ab465fca23d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
