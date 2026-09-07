export const name="number-one-thin";
export const id="dl_3efd37f5ac64457dba0d";
export const url=new URL("../icons/number-one-thin.svg?v=01ca6c424b6e52f94238ed37aa112013a8fc2979045584fdd2ce13b1c71b58d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
