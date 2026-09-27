export const name="number-square-six-fill";
export const id="dl_55d75b34255b41aea38f";
export const url=new URL("../icons/number-square-six-fill.svg?v=22d0d6092f2e71157410e55b92cbf0708599f954ccb3405bc239a72fc8f3967e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
