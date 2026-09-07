export const name="lucid_2-handbag";
export const id="dl_5203921295ee4e3b93d7";
export const url=new URL("../icons/lucid_2-handbag.svg?v=3cd9252279616c4c3457f0a7dee7f7dc232f7ef47c653ec2cf20621bed424306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
