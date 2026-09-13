export const name="1x_mobiledata_badge";
export const id="dl_830cdea2a2414cf495be";
export const url=new URL("../icons/1/1x_mobiledata_badge.svg?v=eccabfb7a44ea6c40f214a1f943255ba8f02204ed4545b9de6c93a9d818fe211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
