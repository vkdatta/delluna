export const name="game_button_l2";
export const id="dl_8770b742c3ee73e8055e";
export const url=new URL("../icons/game_button_l2.svg?v=44f706a4e7ae3cd67466682581e18dd704aa9410e3218514dd030761f6a08c9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
