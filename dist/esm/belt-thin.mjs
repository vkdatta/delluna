export const name="belt-thin";
export const id="dl_cfbd2c68aa354a3994a0";
export const url=new URL("../icons/belt-thin.svg?v=79b1e8805e697c1caa2a5dc0c8d8a5a16c498a93562034e76147a878f2ce68eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
