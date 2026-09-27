export const name="beach-ball";
export const id="dl_e871b048b3564e31b07d";
export const url=new URL("../icons/beach-ball.svg?v=ca75797fcdb2d4a8f2b7fbe1f74b0897c6d56019b3b96a9e50e5d83665cdd5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
