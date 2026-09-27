export const name="sd_card_alert";
export const id="dl_73a92d4be80e70165e17";
export const url=new URL("../icons/sd_card_alert.svg?v=eeaae02e561b76737f70faf7357458fdc30aa44584c61494e95a2a51e6dbc744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
