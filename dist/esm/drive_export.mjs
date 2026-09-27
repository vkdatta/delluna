export const name="drive_export";
export const id="dl_6a576581228b15fa8267";
export const url=new URL("../icons/drive_export.svg?v=42f3523d7838049f4244f03b5af1b9839b455e854b5ef4214709757a8db98384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
