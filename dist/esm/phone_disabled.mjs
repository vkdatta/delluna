export const name="phone_disabled";
export const id="dl_69aeae43cee7b00860db";
export const url=new URL("../icons/phone_disabled.svg?v=176646b85e55042410b4814bfdf226a95796b11b17a44ed8a68f9d7e79f45be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
