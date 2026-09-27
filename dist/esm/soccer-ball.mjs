export const name="soccer-ball";
export const id="dl_dd0de3ad798735dc2193";
export const url=new URL("../icons/soccer-ball.svg?v=e1b1baf2e9a47dbdc746f2e5bc6fb9b424ed6640cd6b974dba77cf5343bd0213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
