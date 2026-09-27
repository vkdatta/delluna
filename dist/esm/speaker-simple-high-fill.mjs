export const name="speaker-simple-high-fill";
export const id="dl_dbee23f5a0b04be14b22";
export const url=new URL("../icons/speaker-simple-high-fill.svg?v=6e7a5a9d9bc6e83919a8883fe1cf13b0246c1102a26aaa9caf5d74d877da4ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
