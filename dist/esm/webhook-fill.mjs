export const name="webhook-fill";
export const id="dl_ba000ae89fa19ca31f98";
export const url=new URL("../icons/webhook-fill.svg?v=edc18a24c9e9960ac1041f9c47b2fb6445136efed3669527f8ef12d10dbfa095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
