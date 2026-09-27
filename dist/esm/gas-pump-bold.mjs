export const name="gas-pump-bold";
export const id="dl_d0abbf09bc2b42ae8fea";
export const url=new URL("../icons/gas-pump-bold.svg?v=ccfe4b5392fba37a0306b3641a4b41174436fddec2ed890fbeb675508fb5009c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
