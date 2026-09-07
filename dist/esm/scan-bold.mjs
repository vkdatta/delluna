export const name="scan-bold";
export const id="dl_a6841634fb4d4792aad6";
export const url=new URL("../icons/S/scan-bold.svg?v=8ad57786364e8515c36f518a436b53d0bf7036a26376df2cfd8ab6e65c8bdb7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
