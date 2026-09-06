export const name="corners-out";
export const id="dl_84afe6baac3746aabf4a";
export const url=new URL("../icons/corners-out.svg?v=fd79277404b3662b50b737127fb6bf6f63ae93c9b60d9f2aca9122a950ec08c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
