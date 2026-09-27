export const name="shield-duotone";
export const id="dl_a7f08c39d3918776d540";
export const url=new URL("../icons/shield-duotone.svg?v=3a87dd09cb797264b564270c711359528e5a66b1d71cc25ab6465ddb501f24ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
