export const name="fire-extinguisher-thin";
export const id="dl_2cbf23acc5f04c049da0";
export const url=new URL("../icons/fire-extinguisher-thin.svg?v=92d50210367604a62f100f64a973510903b29a410869f8c17fa9fb2960a266cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
