export const name="dice-six-duotone";
export const id="dl_4a5c4fe1833b4503ae9a";
export const url=new URL("../icons/dice-six-duotone.svg?v=114254c8d97a9dd7059ffcbf96e5f1799b7423d9d97b47cd34d6b354b82e33ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
