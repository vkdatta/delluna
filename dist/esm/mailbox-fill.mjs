export const name="mailbox-fill";
export const id="dl_b54662b15064427b912b";
export const url=new URL("../icons/mailbox-fill.svg?v=8cef23fe3f8fea75e6f98c8cd25dd2de0301195004ed8bd82ba0b09f8d28049e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
