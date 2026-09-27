export const name="keyboard_arrow_up-fill";
export const id="dl_9f3bd10a1287cbd6787a";
export const url=new URL("../icons/keyboard_arrow_up-fill.svg?v=98ace1d32bb8b415e4065ace16e948e11dfbd82e4d607b3a82daade6bc66b272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
