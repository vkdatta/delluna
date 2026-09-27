export const name="skip-forward";
export const id="dl_e91965afab6c98f65b9a";
export const url=new URL("../icons/skip-forward.svg?v=85ec5581e9e9f0c68c758387de860f1fa62bfbd20b67d0cdc0d00639dfc02e7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
