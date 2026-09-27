export const name="assignment_turned_in";
export const id="dl_414a341021bf8df2259a";
export const url=new URL("../icons/assignment_turned_in.svg?v=ca258f74f998ddfbcd9dc49a4bd8b0406c28432e40228e5918bcbce8d93099b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
