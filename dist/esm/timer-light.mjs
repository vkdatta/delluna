export const name="timer-light";
export const id="dl_db3d7c2e5ac4926313de";
export const url=new URL("../icons/timer-light.svg?v=81d38de7a657f4623d44a8a85c929ef093fde04527bee43678f3007eaa6d31f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
