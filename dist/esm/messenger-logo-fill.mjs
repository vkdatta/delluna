export const name="messenger-logo-fill";
export const id="dl_9d5c699d28bd4499a90b";
export const url=new URL("../icons/messenger-logo-fill.svg?v=42c6ce6681f29bf05f379ce1d90c1053f7f593c2270647cd3631016275076f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
