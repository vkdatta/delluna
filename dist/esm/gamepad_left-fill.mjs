export const name="gamepad_left-fill";
export const id="dl_de352500047cb5c42567";
export const url=new URL("../icons/gamepad_left-fill.svg?v=631e1a6aa8a5c69a978e1697e192c69b7d1cc9113cc1b04cd81dcc7a31e7d3a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
