export const name="move_selection_up";
export const id="dl_74fb0611d8f55d6b21e9";
export const url=new URL("../icons/move_selection_up.svg?v=964f4297c896739162a2003227e9e659091b3135e19a49764fbecba5d63c30eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
