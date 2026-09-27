export const name="camera-plus-duotone";
export const id="dl_e3c35b9b416c4cce916a";
export const url=new URL("../icons/camera-plus-duotone.svg?v=9ad8a087d5ed0061fd7f781a56d913b5f7a34b43f4151c966e41b91260882fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
