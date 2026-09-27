export const name="cloud-lightning-duotone";
export const id="dl_325756e062f1483892b0";
export const url=new URL("../icons/cloud-lightning-duotone.svg?v=ea987db1eda3e21848fffc2137f01ecf24f79bac27ed8f002d77a4a8f5af726c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
