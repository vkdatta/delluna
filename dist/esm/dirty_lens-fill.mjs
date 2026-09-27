export const name="dirty_lens-fill";
export const id="dl_01a914a56581c9bd3d0b";
export const url=new URL("../icons/dirty_lens-fill.svg?v=c5c079bccd51a07d7ce6e498199aefc735dff8a4610fb3b199583686f37f33d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
