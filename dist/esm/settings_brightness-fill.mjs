export const name="settings_brightness-fill";
export const id="dl_281fd0add2d071ebfb73";
export const url=new URL("../icons/settings_brightness-fill.svg?v=ade0dd26e3e179662a961c02e848ae020473b3460fd0ae3fca03d4d42da69fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
