export const name="triangle-light";
export const id="dl_8cccb47be4f3319a1120";
export const url=new URL("../icons/triangle-light.svg?v=cef802dce4ccda3579b4cd9b984fb95323b0b92235c5ead031a0fc29f2d9f633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
