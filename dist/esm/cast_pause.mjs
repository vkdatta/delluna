export const name="cast_pause";
export const id="dl_e3193d3d8b815bbe1bd1";
export const url=new URL("../icons/cast_pause.svg?v=7a33546f2f617a4c975b88de4aed58c5e936f35684a95332167a99636b59698a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
