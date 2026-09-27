export const name="notifications_active-fill";
export const id="dl_74572d557a0e7c56886c";
export const url=new URL("../icons/notifications_active-fill.svg?v=3cf2d958f24d10c54ca6cf63f46375cb64df539e24f4d1dde8e851034c895b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
