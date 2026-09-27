export const name="on_hub_device";
export const id="dl_ccc3d470485629ae4eb8";
export const url=new URL("../icons/on_hub_device.svg?v=e73abac685d348aa08653ee45b0e9a2355740c608def3b7a616ee41603fdaad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
