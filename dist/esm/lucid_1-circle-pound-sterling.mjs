export const name="lucid_1-circle-pound-sterling";
export const id="dl_3a9a07936043433a8084";
export const url=new URL("../icons/lucid_1-circle-pound-sterling.svg?v=f1fcf3914dd212a6ab04c382077c481ed1a0b56c8a02512a7adf79436ad31608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
