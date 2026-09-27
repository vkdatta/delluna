export const name="sports_and_outdoors-fill";
export const id="dl_88ddbcc880815d34fcbb";
export const url=new URL("../icons/sports_and_outdoors-fill.svg?v=828b67b1068d20ff7980bca1d13403a9d1778ec64856b96ec2fec9a715e3c568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
