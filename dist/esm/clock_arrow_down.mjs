export const name="clock_arrow_down";
export const id="dl_0bbc2cee8705c33e4692";
export const url=new URL("../icons/clock_arrow_down.svg?v=e3d35e4fa8a4c68fa88879b0593e90d787de4ad21e58689bee611e4b778e0ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
