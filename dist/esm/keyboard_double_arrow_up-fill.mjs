export const name="keyboard_double_arrow_up-fill";
export const id="dl_2b6deea01def8b8286f7";
export const url=new URL("../icons/keyboard_double_arrow_up-fill.svg?v=318dc129ac51bbfd25fb27fefa74aa7c6e42b8cb9b8ba74be1cffddfd18fccc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
