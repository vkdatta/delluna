export const name="lucid_3-message-square-dashed";
export const id="dl_5e297379eb504086a722";
export const url=new URL("../icons/lucid_3-message-square-dashed.svg?v=1e3033794ffef46ab3c23b1cda60e7f85c8c771d39c5ec2e2946eacf8654fdfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
