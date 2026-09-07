export const name="worm";
export const id="dl_875390c23a7046319c2d";
export const url=new URL("../icons/worm.svg?v=dabd2d312d912657ded29bf5c98ea8df07f3327e6372e6496485d204a00e1e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
