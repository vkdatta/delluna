export const name="timer_1-fill";
export const id="dl_fe971d8457da8c3738de";
export const url=new URL("../icons/timer_1-fill.svg?v=f399412a637d599bf40a92c7538dd61be35ce473511f99d51e3a4bc7b5df3f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
