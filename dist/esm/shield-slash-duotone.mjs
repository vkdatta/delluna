export const name="shield-slash-duotone";
export const id="dl_19ce7eaee50fe7d42170";
export const url=new URL("../icons/shield-slash-duotone.svg?v=841946f63d89ce3185722e8598fa9ed738591b1337ac037d5f46ccb031ad5cf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
