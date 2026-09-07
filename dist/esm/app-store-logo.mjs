export const name="app-store-logo";
export const id="dl_da69ddcbd866491ea62a";
export const url=new URL("../icons/app-store-logo.svg?v=a25303c4f998e698ade7e8934e750c25a1d28c772863814ca07579ffe54ad1c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
