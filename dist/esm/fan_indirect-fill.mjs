export const name="fan_indirect-fill";
export const id="dl_c4452dd87874e1ff19c0";
export const url=new URL("../icons/fan_indirect-fill.svg?v=4a55fa4839a35744068d834438c3a418951de7ae8eb771a7539a3f17792bffbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
