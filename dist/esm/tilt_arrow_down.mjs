export const name="tilt_arrow_down";
export const id="dl_dc2e9b70db7a4a6bcc7f";
export const url=new URL("../icons/tilt_arrow_down.svg?v=a75852ab0de96d6a756d30dcc101ced0727bcc6b6c43c490c522348f4eb9d2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
