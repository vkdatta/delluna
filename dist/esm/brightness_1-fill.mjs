export const name="brightness_1-fill";
export const id="dl_d3d898e0e291b37ec7e6";
export const url=new URL("../icons/brightness_1-fill.svg?v=b415aabe551e254ea2bab7980c8791a816425eb068f11fe9e21d31714815c2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
