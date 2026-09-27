export const name="microsoft-powerpoint-logo-thin";
export const id="dl_88ef308686aa44d3bad8";
export const url=new URL("../icons/microsoft-powerpoint-logo-thin.svg?v=c5ff2554b7b6ef35827caaef30bf87e4499a3abc041b8607fe58f7d7381fbda9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
