export const name="compass-rose-bold";
export const id="dl_e1f8e451a4bf4e3f9677";
export const url=new URL("../icons/compass-rose-bold.svg?v=2c92e7659f89622d0f9ed2582cef5451aa65fca9e29c6889e375c57c37b9c9ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
