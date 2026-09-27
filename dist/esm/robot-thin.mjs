export const name="robot-thin";
export const id="dl_d72fc985551e4a72b25c";
export const url=new URL("../icons/robot-thin.svg?v=25666f4cdabb77bd9a981120cb93c6e52fa11a34d01abdd4f61e65f5135b2826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
