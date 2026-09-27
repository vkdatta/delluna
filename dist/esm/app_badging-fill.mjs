export const name="app_badging-fill";
export const id="dl_ee11d505ca933ce4f5e5";
export const url=new URL("../icons/app_badging-fill.svg?v=65de41f1f7f609c901ef985e0c7d0c618090868dab49489130e97af89f087956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
