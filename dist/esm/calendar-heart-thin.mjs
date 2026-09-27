export const name="calendar-heart-thin";
export const id="dl_01382916e7ec43ecab39";
export const url=new URL("../icons/calendar-heart-thin.svg?v=a5d2ff5ad326d41434fc22f1f93187ebf2288bbd44eb61d14291a0047bf80300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
