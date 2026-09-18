export const name="file_upload_off-fill";
export const id="dl_3197041857a54eee8c11";
export const url=new URL("../icons/file_upload_off-fill.svg?v=618a89a32f5763d6c6ca161b7f8a89f080d8c3a0014dac32abbb618d34b392d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
