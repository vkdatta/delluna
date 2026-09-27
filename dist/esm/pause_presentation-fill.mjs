export const name="pause_presentation-fill";
export const id="dl_7d5e3bdac63b0e58f6bd";
export const url=new URL("../icons/pause_presentation-fill.svg?v=3ade3ee57d67a92551744f87d44729a970491f326340265323dd2be35156c72e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
