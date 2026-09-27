export const name="file-png-fill";
export const id="dl_1a913d16edbc40dfbdba";
export const url=new URL("../icons/file-png-fill.svg?v=d534c48d798c750e08ccb03ff11f277d098ef03dc5a9f52a4f3f079128907c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
