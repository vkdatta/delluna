export const name="chalkboard-teacher-bold";
export const id="dl_feb45d05f7f54e6698f9";
export const url=new URL("../icons/chalkboard-teacher-bold.svg?v=41acefcbbd832c76812f98266877d634b14b6762a9050dda32c647e18afd5071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
