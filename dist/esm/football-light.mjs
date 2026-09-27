export const name="football-light";
export const id="dl_cac9ea24158b40eeb2a0";
export const url=new URL("../icons/football-light.svg?v=48bb91b52852e16ca0b6227e829595ba696ba1e4f36f5e4b70462d68bace9154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
