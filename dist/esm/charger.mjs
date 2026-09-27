export const name="charger";
export const id="dl_8ec8e262fa4b25501921";
export const url=new URL("../icons/charger.svg?v=006f92ad76dc2c9ba9bd4fa29f48a0abbf89b5f111d4650c0f2330aaf1e4e24f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
