export const name="globe-hemisphere-east-light";
export const id="dl_53752567b3fc480f828e";
export const url=new URL("../icons/globe-hemisphere-east-light.svg?v=b901dc84903574ac636f4853ea06c1661d7752aed425471e085c3d8a0f6fb586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
