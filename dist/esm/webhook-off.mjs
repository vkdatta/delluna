export const name="webhook-off";
export const id="dl_96d076f3f5684acc8647";
export const url=new URL("../icons/webhook-off.svg?v=b86fd679ab3145dd3fd17aa004c274c04263bc35c5b9ddb527d27d757cc9e21e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
