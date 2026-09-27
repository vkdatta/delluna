export const name="app-store-logo-fill";
export const id="dl_1e51cfbee75a4683b52c";
export const url=new URL("../icons/app-store-logo-fill.svg?v=d6bc7e0baeb1250bc3e110f3fbcb63b04dbafc7e6b565542c167657f1ad1e459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
