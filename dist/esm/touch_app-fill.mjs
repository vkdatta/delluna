export const name="touch_app-fill";
export const id="dl_6bf18a66c232bf184d6e";
export const url=new URL("../icons/touch_app-fill.svg?v=9b24aa7f4a9773cf2922c28565768ea5671263cedabdd2bf105a2c038f43a27b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
