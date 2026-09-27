export const name="beach-ball-light";
export const id="dl_d446a97a2fd44688b02d";
export const url=new URL("../icons/beach-ball-light.svg?v=16aea96d6b97b2b851d73529484aefd752fbe8338e30b1a989759832a1a0788f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
