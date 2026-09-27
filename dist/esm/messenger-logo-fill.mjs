export const name="messenger-logo-fill";
export const id="dl_9d5c699d28bd4499a90b";
export const url=new URL("../icons/messenger-logo-fill.svg?v=8202a7bf028b068a0b9de43fff3b88412da39e0024282181ac6dbba5ff8d886a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
