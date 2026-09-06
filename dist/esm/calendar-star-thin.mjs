export const name="calendar-star-thin";
export const id="dl_0664e955970a4e3abd9f";
export const url=new URL("../icons/calendar-star-thin.svg?v=f5b58b288a3e198a41666428d1c8ba1c1782806d3d778b3b195305a5f0f09844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
