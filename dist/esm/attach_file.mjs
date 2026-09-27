export const name="attach_file";
export const id="dl_f8948b4300d5cc0d9b52";
export const url=new URL("../icons/material_symbols/attach_file.svg?v=5eb36fae2b249d79dff3db61d1ed0de75ed4b9e6c9df6bd410db575833a1949b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
