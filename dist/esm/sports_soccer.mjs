export const name="sports_soccer";
export const id="dl_3f75bc5dac5249baa83d";
export const url=new URL("../icons/S/sports_soccer.svg?v=56cff8aeb347b4f5d6b4ca5dc38cb068396ed49d364abdf277ceffdd75eefb17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
