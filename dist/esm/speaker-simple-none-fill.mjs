export const name="speaker-simple-none-fill";
export const id="dl_a1cd54054755885589c7";
export const url=new URL("../icons/speaker-simple-none-fill.svg?v=7b1fc24797611662565b7987952d35bfaab114f6dea0bfb3024de480c5272234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
