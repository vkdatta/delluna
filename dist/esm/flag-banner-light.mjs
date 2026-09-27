export const name="flag-banner-light";
export const id="dl_0bb9560d14e642c39dc4";
export const url=new URL("../icons/flag-banner-light.svg?v=2d5f8100f1bb6d59578d4b7017ac34ae504871892d24bfa4def77e1b9b009353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
