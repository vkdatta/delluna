export const name="device-mobile-speaker-fill";
export const id="dl_df2a88711a8542c4aebb";
export const url=new URL("../icons/device-mobile-speaker-fill.svg?v=eb1316520e95449d45396ac596c8f2286d1cda6ea955e5fdfdbf620390ed8722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
