export const name="device-mobile";
export const id="dl_4cd3b75e8ef544828a17";
export const url=new URL("../icons/device-mobile.svg?v=db1f74b205590c98d61f61dff7b1f702eddd5a9e15eec7d9681798054ccb757a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
