export const name="rocket_launch-fill";
export const id="dl_7e82381f5dbff590e4eb";
export const url=new URL("../icons/rocket_launch-fill.svg?v=305cd9277892bc7f923e0a06b93e64d2e617241cb0bcd40931ae4d960aca237b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
