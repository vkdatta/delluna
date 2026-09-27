export const name="selection-slash-fill";
export const id="dl_1a1d291c8a3025a64ae4";
export const url=new URL("../icons/selection-slash-fill.svg?v=5034f826dabcc5fd8a55042355031cb89f18a0bda64c9310d08d041edb429108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
