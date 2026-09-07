export const name="thermometer-thin";
export const id="dl_9fcea896db1842d88937";
export const url=new URL("../icons/T/thermometer-thin.svg?v=670820ca55666e6597aff11299008429d70a9bfcb549054ab73adb563dc132bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
