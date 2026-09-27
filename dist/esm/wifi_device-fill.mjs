export const name="wifi_device-fill";
export const id="dl_eab54779da62b9d7f0e1";
export const url=new URL("../icons/wifi_device-fill.svg?v=841dc783dd97530867a56b412c08e5f36aab8a5b96a876398b21f3dc84fb3d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
