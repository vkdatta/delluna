export const name="envelope-simple-duotone";
export const id="dl_c72fc38b2dfe4427a87d";
export const url=new URL("../icons/envelope-simple-duotone.svg?v=e6b35b5cefa33e647da0be65b299548de7fcbdb7122a7a4371744b2f02ae961f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
