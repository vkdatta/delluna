export const name="parking_sign";
export const id="dl_dc2abc0567e0de15b682";
export const url=new URL("../icons/parking_sign.svg?v=7480b9237d36623233a9d870a0a9422f8fd61d686551c42588c86bb75bffe306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
