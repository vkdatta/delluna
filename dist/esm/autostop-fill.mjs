export const name="autostop-fill";
export const id="dl_4c337532ec4eacda2795";
export const url=new URL("../icons/autostop-fill.svg?v=44df02df6c46ccec3fcc4e13aff08b2d63c1787c516f4f43aaf90c727e98270c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
