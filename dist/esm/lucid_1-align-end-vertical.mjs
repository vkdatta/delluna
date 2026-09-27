export const name="lucid_1-align-end-vertical";
export const id="dl_1edcf176291646139203";
export const url=new URL("../icons/lucid_1-align-end-vertical.svg?v=d380afef73d00fa56a8cc95c2ec1b202cf8d92894918e197f56618a62e8d74de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
