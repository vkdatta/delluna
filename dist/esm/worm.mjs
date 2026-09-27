export const name="worm";
export const id="dl_875390c23a7046319c2d";
export const url=new URL("../icons/worm.svg?v=7c39ae5fa92348f266ca7bae72bc8f628805413d979410741d48c3827bf6a2c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
