export const name="desktop_cloud-fill";
export const id="dl_0937375d8f8fd1ca0f95";
export const url=new URL("../icons/desktop_cloud-fill.svg?v=048bae2f33dd3a424b3e3090e838983f3419cfbe3060af589779471551879c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
