export const name="chat-teardrop-fill";
export const id="dl_d3285911fb114cdbb893";
export const url=new URL("../icons/chat-teardrop-fill.svg?v=43d6307d88c44f50cbc1fc1204164df8041bd6080b8dfbf84abe10c22f9c00bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
