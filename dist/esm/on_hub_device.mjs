export const name="on_hub_device";
export const id="dl_c54e23e7f5eec33f7c42";
export const url=new URL("../icons/on_hub_device.svg?v=7d8f581cccaf0c5f7b42de7cb77a06dc43cad42f80212d001728e3bc76f7291a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
