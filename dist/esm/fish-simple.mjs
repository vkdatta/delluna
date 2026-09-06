export const name="fish-simple";
export const id="dl_fdc565403c694491b99f";
export const url=new URL("../icons/fish-simple.svg?v=a59b6fa8fd8937f12adc88248cf2c1e2a1f03a7a58b7047aabc3fbcf8aeffac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
