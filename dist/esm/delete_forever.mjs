export const name="delete_forever";
export const id="dl_585f4db0e0534588b483";
export const url=new URL("../icons/D/delete_forever.svg?v=afe9308561e14d95057e98055a0af2c1d5101f4511cb01015c5fb2675e11c8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
