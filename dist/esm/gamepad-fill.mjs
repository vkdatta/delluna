export const name="gamepad-fill";
export const id="dl_9cefa6523b1b2c9dcc42";
export const url=new URL("../icons/gamepad-fill.svg?v=891bc1a70af8ffda0d96b620b76920e52359c9c47a68c7b43ffcc3f00670b065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
