export const name="smiley-sad-fill";
export const id="dl_85550d0de67a4fda84a5";
export const url=new URL("../icons/S/smiley-sad-fill.svg?v=b7fa4a3bfedc94e03be417f6778bdc60776590496b7fd311abed0351f89b9bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
