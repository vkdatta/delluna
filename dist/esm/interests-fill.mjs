export const name="interests-fill";
export const id="dl_1ac0507d5aa746c88967";
export const url=new URL("../icons/interests-fill.svg?v=1cc19e60b74b1caac9f5a2c575ec0780de627d90ef92dbf4d67e5b211d53b76f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
