export const name="download-simple";
export const id="dl_886e088d2de3444db262";
export const url=new URL("../icons/download-simple.svg?v=c48678aa09b44ba4974954690ee6cc846379c448a7214f8c802604c2a1562014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
