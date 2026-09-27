export const name="wind_power";
export const id="dl_2df6db2198241ffe36d2";
export const url=new URL("../icons/wind_power.svg?v=c0546fccf97746511089e5648c64d582ba2043414a5e5ed698894c2fb064c8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
