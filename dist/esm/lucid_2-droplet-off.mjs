export const name="lucid_2-droplet-off";
export const id="dl_83fadfeac4b64cb0bf08";
export const url=new URL("../icons/lucid_2-droplet-off.svg?v=f84ff2967ae532561804ebb4002a9ad79e2ca403e55e5b1e5995a58cf35296f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
