export const name="business_center";
export const id="dl_cb64d5827bfeee39cfe1";
export const url=new URL("../icons/business_center.svg?v=12af186eb84449d5c3c9d7179f2c351ec2eeba91cf195c4ce0adebaa9501246e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
