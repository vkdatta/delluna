export const name="3g_mobiledata";
export const id="dl_2641211f3ba13ee9ff67";
export const url=new URL("../icons/3g_mobiledata.svg?v=4bea4ed883c91ad08b7cb67c2484b78beb091492babd58db18826ea6a23a0890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
