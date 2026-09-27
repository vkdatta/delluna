export const name="gas-pump-duotone";
export const id="dl_4248b7aadfdf445ca80d";
export const url=new URL("../icons/gas-pump-duotone.svg?v=693fa715d17bc845afb2b44df991c07ae15d05dc00a1e3eed2a82ed3fa30c5d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
