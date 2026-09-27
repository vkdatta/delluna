export const name="google_home_devices-fill";
export const id="dl_916e16e7816444fc06ea";
export const url=new URL("../icons/google_home_devices-fill.svg?v=da6dc1f9a05d6f9e16eafc932c93aaa6f333b5357d62f0b17ce6a69c0b306580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
