export const name="wifi-pen";
export const id="dl_06f024b2770d4a2a9e47";
export const url=new URL("../icons/wifi-pen.svg?v=239a7552fe1aaae30c2fa5071099c2c45c5085b5efb220ee387e5ebc3ec5757b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
