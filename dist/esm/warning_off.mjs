export const name="warning_off";
export const id="dl_da6845164de995d0ff9a";
export const url=new URL("../icons/warning_off.svg?v=77062ebca41f6debb9b346cfc215d746abc8129c1b39274a6549e1f559fcc1ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
