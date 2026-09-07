export const name="linux-logo-fill";
export const id="dl_29d37238d2fb4c3e952d";
export const url=new URL("../icons/linux-logo-fill.svg?v=fb77779ca42b696b86e05cb62c4a6619f281f1c215bbf3615342383f0ba9c4d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
