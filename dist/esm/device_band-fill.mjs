export const name="device_band-fill";
export const id="dl_3da970e645a9b89bc120";
export const url=new URL("../icons/device_band-fill.svg?v=927b370692b97c00b7bf1f75bb684475c014be6a72b2d91ce0594dccd4cd231d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
