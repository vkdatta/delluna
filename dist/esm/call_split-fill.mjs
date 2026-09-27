export const name="call_split-fill";
export const id="dl_41fb947871ee1d839aa5";
export const url=new URL("../icons/call_split-fill.svg?v=7960ebe24b2fffb579a0dc6956a735898b8486474b7806ddf134cc3142ad1e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
