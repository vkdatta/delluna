export const name="camera_outdoor";
export const id="dl_898612a401447dd806f7";
export const url=new URL("../icons/camera_outdoor.svg?v=43ccecc8512dbd6af4be9f2c3863b9f4db7eca19a0a25e03b152649ed76551c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
