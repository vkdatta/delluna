export const name="lucid_1-align-end-vertical";
export const id="dl_1edcf176291646139203";
export const url=new URL("../icons/lucid_1-align-end-vertical.svg?v=8b227b58222dd22f9f3bb64f1d3418fd8413f6d00bd223d19dda70c1c734dcd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
