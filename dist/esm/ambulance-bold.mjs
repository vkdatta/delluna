export const name="ambulance-bold";
export const id="dl_7bb8ad2abeb242f9ad01";
export const url=new URL("../icons/ambulance-bold.svg?v=411a96a5f8e4954b6a6fcf0443b03b2f2c195842d2ccb5e00453da804dc2680e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
