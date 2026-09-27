export const name="high_density";
export const id="dl_748d38fe12b25fd709dd";
export const url=new URL("../icons/high_density.svg?v=30f3db07748c9f937bd181ec1fb656c731d7cdbc66b07c847b63ad0a3154cba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
