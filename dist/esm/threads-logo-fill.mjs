export const name="threads-logo-fill";
export const id="dl_b975795c5eed92436875";
export const url=new URL("../icons/threads-logo-fill.svg?v=2a60e70b82a04553d0fb487120155b572fb0ef7428daf30405b41e539008b8bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
