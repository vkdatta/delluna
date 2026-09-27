export const name="bone-bold";
export const id="dl_6bc186d81ab447df9759";
export const url=new URL("../icons/bone-bold.svg?v=9e87af861381a58c23e8b12deab9de721717f3c47a4a332c60e9b2fa0e75968d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
