export const name="shield_with_heart-fill";
export const id="dl_354e57408019b1ef7dcf";
export const url=new URL("../icons/shield_with_heart-fill.svg?v=867e83d4f62221dc892506719893d65bce99b4b97ee480bbb857b905fcb2578d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
