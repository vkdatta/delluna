export const name="pen-thin";
export const id="dl_15af2e58216f47f88b39";
export const url=new URL("../icons/pen-thin.svg?v=9623ed1f6c6966ce7372e1dd3f64f7ed87b4b951bda7742456658bb37dd34bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
