export const name="graduation-cap-duotone";
export const id="dl_1af1dcc91caa48a2bf88";
export const url=new URL("../icons/graduation-cap-duotone.svg?v=fdbc94ea3615525045caf345a53fd49ae74639fc9a941e938ad1dc21de9919fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
