export const name="lucid_3-signal-zero";
export const id="dl_e59fff0d87114d44ba89";
export const url=new URL("../icons/lucid_3-signal-zero.svg?v=ada23ab9247c5d176b2cc2fc1126172d110775bab8fdcdce30421964bc50146c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
