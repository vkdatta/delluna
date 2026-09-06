export const name="car-profile-light";
export const id="dl_234fd198c9b64739ade3";
export const url=new URL("../icons/car-profile-light.svg?v=d3adcb2891cda5c5eaa108c5591161411ab0e937d665424691adf1b321730aaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
