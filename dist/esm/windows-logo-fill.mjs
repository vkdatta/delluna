export const name="windows-logo-fill";
export const id="dl_443da9891a2c9435d3de";
export const url=new URL("../icons/windows-logo-fill.svg?v=b1b9053bf0f29c5d92115a00e2ff0c0cbcd84e95ddbacc66aeaf31524c01d0bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
