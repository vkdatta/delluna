export const name="settings_remote-fill";
export const id="dl_70bddb5e4e9f2a5ec2dd";
export const url=new URL("../icons/settings_remote-fill.svg?v=cfad327c2430c3d1633546d35da389051807fd5c0dbd9c4c3d2d04a683366170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
