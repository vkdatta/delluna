export const name="weather_hail";
export const id="dl_c305454a59b2e9363c40";
export const url=new URL("../icons/weather_hail.svg?v=d1b6f487534b07a52a977d1cd2a61673cf0e9c85beee0103547a97b8a40ae386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
