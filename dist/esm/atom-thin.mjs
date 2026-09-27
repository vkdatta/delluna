export const name="atom-thin";
export const id="dl_9e1b4fb4133b48869487";
export const url=new URL("../icons/atom-thin.svg?v=53c0de20b77b2b6361c2cfebb73d0db8d909fb499b3b3b360a1e7f9e65597c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
