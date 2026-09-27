export const name="flip-vertical-duotone";
export const id="dl_d43dbb18341548388f0d";
export const url=new URL("../icons/flip-vertical-duotone.svg?v=a99969b995c72457e4adb456cf97aca2d068ef9681a09a33b257f1e3955aa8f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
