export const name="tactic-fill";
export const id="dl_8a8a7297dacd2f6d62d2";
export const url=new URL("../icons/tactic-fill.svg?v=27b30ffe983d837074baa7838550c54595318ca76f6360cfe5b928a2b9203b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
