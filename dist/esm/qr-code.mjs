export const name="qr-code";
export const id="dl_6b01f1986ceb4cedaf3e";
export const url=new URL("../icons/qr-code.svg?v=3b87f0a9fa7b8e6be893b6be697fcf97c9de321464dfb74f2cfc880de3ce1816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
