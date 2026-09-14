export const name="add_call-fill";
export const id="dl_470ddd35be6f4d389afb";
export const url=new URL("../icons/A/add_call-fill.svg?v=f26790145948fb4bccf34bf0e036cb75a46b10c9af937a0d26aab62cd27cc82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
