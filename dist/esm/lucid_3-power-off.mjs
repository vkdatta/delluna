export const name="lucid_3-power-off";
export const id="dl_6ef97cd918904f358bca";
export const url=new URL("../icons/lucid_3-power-off.svg?v=df572172b63a994374ee31d851342149a51bfdb24fcf5fc3fd5856736cc76b70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
