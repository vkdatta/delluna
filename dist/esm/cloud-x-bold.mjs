export const name="cloud-x-bold";
export const id="dl_1a985b2886874fcdab9d";
export const url=new URL("../icons/cloud-x-bold.svg?v=ec5a011f5531ae8447b63c7723fb72bed2ec265bfe1adb3166ebf1759edfc355",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
