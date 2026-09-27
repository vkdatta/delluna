export const name="gamepad";
export const id="dl_f789e619ba8bd2ce36df";
export const url=new URL("../icons/gamepad.svg?v=959960f60b20fda8825e5cc829207f4d3253688339efe8a9a39cd386163c87eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
