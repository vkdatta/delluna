export const name="poker-chip-thin";
export const id="dl_ffd31bdd34d34b95b989";
export const url=new URL("../icons/poker-chip-thin.svg?v=c6fc5f0d96c68968b22956e6456213fcbb065a601d31697cb5564403123e5e04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
