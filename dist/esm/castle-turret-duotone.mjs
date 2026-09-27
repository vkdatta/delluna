export const name="castle-turret-duotone";
export const id="dl_7f62e77bb4574b3b9ad2";
export const url=new URL("../icons/castle-turret-duotone.svg?v=26b8f2a5d445d8fb434750568a70d4ea3052e67a80149f50345d020e3555304b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
