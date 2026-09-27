export const name="wifi_password-fill";
export const id="dl_c38f322e002b82debb18";
export const url=new URL("../icons/wifi_password-fill.svg?v=5da9dcb34ded1f7fca2b5d67ad58ab4b665c11b15a4151839f0f35414fffffea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
