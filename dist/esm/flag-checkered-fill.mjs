export const name="flag-checkered-fill";
export const id="dl_8b9b2948e30f48d89439";
export const url=new URL("../icons/flag-checkered-fill.svg?v=a768359fb7e122f5bfb3c168ccbb6725235306bca8dd221dea4da0546d7bea75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
