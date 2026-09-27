export const name="labs";
export const id="dl_8153208a5baabd3f001b";
export const url=new URL("../icons/labs.svg?v=2ea419f48f6f8f1d1b052f17ea46ce22514e94eea56351c6e42efa333af6ab76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
