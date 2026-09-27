export const name="smart_display";
export const id="dl_554663baad68b9792f05";
export const url=new URL("../icons/smart_display.svg?v=61633f6819b62760cd2317e9f937db2cc2c3fe90e652afc7aa4100fd5d51a215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
