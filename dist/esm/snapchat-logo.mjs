export const name="snapchat-logo";
export const id="dl_8570c3c78a6c430e0af2";
export const url=new URL("../icons/snapchat-logo.svg?v=52e3ef1531d8f81087e3eafef028acba8f3cce5f710ed2b6ec9de90c96b09723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
