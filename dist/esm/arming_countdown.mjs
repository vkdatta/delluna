export const name="arming_countdown";
export const id="dl_f8cd9e6d561bd8dd0405";
export const url=new URL("../icons/arming_countdown.svg?v=8310c0e068b7311c40ec2cd39b3b883111e120feac2f71d4d32d1c096e51cba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
