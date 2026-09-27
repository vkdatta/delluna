export const name="qr-code";
export const id="dl_6b01f1986ceb4cedaf3e";
export const url=new URL("../icons/qr-code.svg?v=9b91f0397d67d9bdc6b12b930db776683c96240ec5f3d83fc3f2f6006cc6622d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
