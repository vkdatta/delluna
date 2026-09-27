export const name="lightbulb-filament-thin";
export const id="dl_eee3685c44484e1cac95";
export const url=new URL("../icons/lightbulb-filament-thin.svg?v=fc68984138c855474ef2d21c9674418dcb5deb0beba30894e2e3c16f0e6d4bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
