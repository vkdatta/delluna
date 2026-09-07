export const name="arrows-out-thin";
export const id="dl_bf35b38d3bdd4323ae92";
export const url=new URL("../icons/arrows-out-thin.svg?v=99d2090346895266374c108613e234d892a898fac5da06fc665c607422fe60c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
