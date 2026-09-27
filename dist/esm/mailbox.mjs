export const name="mailbox";
export const id="dl_69406666524b4875b0ac";
export const url=new URL("../icons/mailbox.svg?v=e55537f3340c4ab9fea9babef6097abc8a5e600df8b1d51c1eda4c8e0c9761f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
