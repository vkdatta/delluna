export const name="engine-duotone";
export const id="dl_4d3729705c5940cdaad5";
export const url=new URL("../icons/engine-duotone.svg?v=d5d5e2106ecf5c4be08cb08c6328565d04f6dab35f5f91d23ca89890ee9a70f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
