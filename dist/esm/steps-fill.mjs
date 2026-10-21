export const name="steps-fill";
export const id="dl_ad990b20b52347c681fa";
export const url=new URL("../icons/assets/steps-fill.svg?v=9f983584e883278d21caa4ce9f9dc625540b06d382f994438bf93881015561bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
