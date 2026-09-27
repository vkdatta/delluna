export const name="lucid_3-plug-2";
export const id="dl_4fad767c14e14fa3bb40";
export const url=new URL("../icons/lucid_3-plug-2.svg?v=e71c29f6fc2335aaf0dbc2561146a6319b9035834d146c952ee36ac4831dea79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
