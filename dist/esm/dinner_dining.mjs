export const name="dinner_dining";
export const id="dl_b1f19d525044441a8d95";
export const url=new URL("../icons/dinner_dining.svg?v=43ec27b64b01b251ef0079e1331671aa79f7583777476242a2ff61ce4edf795b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
