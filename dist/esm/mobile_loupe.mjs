export const name="mobile_loupe";
export const id="dl_9a033489ba80257e7200";
export const url=new URL("../icons/mobile_loupe.svg?v=1c05b0a11456400ce62decd4f933ae5210a42bf7d440a7b02440817b777a56d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
