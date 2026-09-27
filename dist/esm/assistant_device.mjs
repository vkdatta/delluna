export const name="assistant_device";
export const id="dl_c00d637bfae4a10e346a";
export const url=new URL("../icons/assistant_device.svg?v=39b51740872c57c579c4fdda696b512b8937f63f67d6d9a033a137d9b255a42a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
