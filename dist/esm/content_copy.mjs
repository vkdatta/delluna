export const name="content_copy";
export const id="dl_ad388c6b159a4b7e8ddb";
export const url=new URL("../icons/content_copy.svg?v=b953410d9032fb4a9060e121285cac18f0e483b6f22b02cba8c533030bc13505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
