export const name="h_mobiledata-fill";
export const id="dl_3c37f9dabe8141888d75";
export const url=new URL("../icons/h_mobiledata-fill.svg?v=eb5adb921e0d661528dd22017e0ca7761bb26f69a97bfedc8900745bdcac1f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
