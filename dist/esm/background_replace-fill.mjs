export const name="background_replace-fill";
export const id="dl_7a12a68afa585af62184";
export const url=new URL("../icons/background_replace-fill.svg?v=f8dbcdd08726d6869ec4fa26a2e6d3b8fd45e8a626f423d58774774d067cef6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
