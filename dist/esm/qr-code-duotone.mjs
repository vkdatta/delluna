export const name="qr-code-duotone";
export const id="dl_d5036191952b4032a9ae";
export const url=new URL("../icons/qr-code-duotone.svg?v=12286fa22de5ba0b545af1fcdb89c9494a6fe58c70215a8c40e682eb98350cf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
