export const name="toilet-bold";
export const id="dl_59dc2bcdad870630208a";
export const url=new URL("../icons/toilet-bold.svg?v=e029b1b0bacf4b8ab391f614ab5d60ed8d76e0efb566d4404d101dd330767ec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
