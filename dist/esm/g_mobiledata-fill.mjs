export const name="g_mobiledata-fill";
export const id="dl_6ff399f76174c6f8baad";
export const url=new URL("../icons/g_mobiledata-fill.svg?v=166f7ed31c2a71f9e5dd4f4a377d0a6041c5a57848ba348e4cac780e78c96dd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
