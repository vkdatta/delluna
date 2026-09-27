export const name="thermometer_gain";
export const id="dl_135fee87f1ef7230b881";
export const url=new URL("../icons/thermometer_gain.svg?v=a4d541a6bab2ea23b72b9ff6c8b1f675917123645907af6ea74aec51849a4f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
