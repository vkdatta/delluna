export const name="text-align-center-light";
export const id="dl_d910713f53b768d7e8c0";
export const url=new URL("../icons/text-align-center-light.svg?v=c3ddfddcad4e84437de3a284ed6cdc1ec0f1d6dd2c3f628593ce7c8f016062ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
