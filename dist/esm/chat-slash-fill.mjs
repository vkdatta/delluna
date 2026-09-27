export const name="chat-slash-fill";
export const id="dl_6e7d81cb47b14deeb48f";
export const url=new URL("../icons/chat-slash-fill.svg?v=7e39a241cf38abd7d76733ede963c12c391f26e7d61ed985fc3df4589523fc02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
