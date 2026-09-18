export const name="privacy-fill";
export const id="dl_02c39cbae02a42178ebb";
export const url=new URL("../icons/P/privacy-fill.svg?v=94ae78b3a3733a29e08d366183a8c2fbc660dad11f821acbd549c6e49146c668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
