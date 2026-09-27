export const name="steam-logo-light";
export const id="dl_f7e8b61a3293c39621bd";
export const url=new URL("../icons/steam-logo-light.svg?v=52db9c7681d19222b54e8b36ee07533772f5da14616e7dfbb111e7283b79a64d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
