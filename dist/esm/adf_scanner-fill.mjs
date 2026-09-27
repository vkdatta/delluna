export const name="adf_scanner-fill";
export const id="dl_f7ee0dd49b37e39bfb66";
export const url=new URL("../icons/adf_scanner-fill.svg?v=0e98240a845d7652f8693b6758e776f22d606ae0a6b24209c76022f73055cb3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
