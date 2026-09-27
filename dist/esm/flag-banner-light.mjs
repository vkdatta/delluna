export const name="flag-banner-light";
export const id="dl_0bb9560d14e642c39dc4";
export const url=new URL("../icons/flag-banner-light.svg?v=c6c4821e35b238d2ab49f76c56f8436e174ef8cc2f57c8668cd4f2bffb478e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
