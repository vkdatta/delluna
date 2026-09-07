export const name="x-square-light";
export const id="dl_9bdef0f3eb794f54afee";
export const url=new URL("../icons/X/x-square-light.svg?v=6cad7a80b4ef69b6edbae2c2b211a0899e3d3fdb70bd7ea397a8a823b865136e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
