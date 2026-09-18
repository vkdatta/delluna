export const name="how_to_vote";
export const id="dl_81c7472f8e2e45399859";
export const url=new URL("../icons/H/how_to_vote.svg?v=c2c71e16b25650f866f3177d41302be5727d6d4da00d54373c3f0e040adf920c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
