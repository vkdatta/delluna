export const name="webhook-off";
export const id="dl_96d076f3f5684acc8647";
export const url=new URL("../icons/webhook-off.svg?v=61838e880ca7e327a856873886f75aa975a5b10c62dd12565f49457b3e3bc8ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
