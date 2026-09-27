export const name="bookmark-simple-fill";
export const id="dl_0e9fecd77f6e4d2e9af2";
export const url=new URL("../icons/bookmark-simple-fill.svg?v=24fcddd47745b94d1c88e4e8fa134634a45627e2575adc6335bcd50d63bc2c9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
