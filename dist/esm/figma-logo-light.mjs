export const name="figma-logo-light";
export const id="dl_e43f691def714b9b94a9";
export const url=new URL("../icons/figma-logo-light.svg?v=fa93ac1b7a44749b597a0c47359b70b92b5d17818c696add4e508896a57c0327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
