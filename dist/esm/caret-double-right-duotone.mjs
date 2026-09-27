export const name="caret-double-right-duotone";
export const id="dl_05180ee2b3004019b0af";
export const url=new URL("../icons/caret-double-right-duotone.svg?v=7f4b538e3c24402c28b705033a422d0af0a6070d5fcc6066e2c4c68d5bb6e7e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
