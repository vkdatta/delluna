export const name="device-mobile-slash-thin";
export const id="dl_4f1b8ddf35d1448c9e89";
export const url=new URL("../icons/device-mobile-slash-thin.svg?v=ee10856da4fe5160d06d96d80910ba5ec9168278af321af0aaa46ca2cac1fbed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
