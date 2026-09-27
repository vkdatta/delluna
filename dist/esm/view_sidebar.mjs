export const name="view_sidebar";
export const id="dl_f1c1890620834aff5d07";
export const url=new URL("../icons/view_sidebar.svg?v=f7646ae5c7eb7e27b81fdd72a6774217671515db238e4c946aa44077f3958243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
