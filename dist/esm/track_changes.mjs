export const name="track_changes";
export const id="dl_43a96b0235a618dd1d08";
export const url=new URL("../icons/track_changes.svg?v=f589eb44418e64721a1d996afe43dfa8deaa7462367e7fb64acc2b2e656a151e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
