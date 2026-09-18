export const name="public_off-fill";
export const id="dl_a4b3484cc6d84de2bbc0";
export const url=new URL("../icons/P/public_off-fill.svg?v=15e8a49adfe733a73d829098dc5dc443a9f528db842ad4c2abf0205cfbf71fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
