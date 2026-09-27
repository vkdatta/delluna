export const name="clock-counter-clockwise-fill";
export const id="dl_ef8977602d9144cc8d2e";
export const url=new URL("../icons/clock-counter-clockwise-fill.svg?v=7a53ed91fa816c773a6e59eed933bada19d224c4afa7abc1667a2f275892c2a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
