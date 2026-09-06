export const name="qr-code";
export const id="dl_6b01f1986ceb4cedaf3e";
export const url=new URL("../icons/qr-code.svg?v=7c6b19eb844b25e39b343576dec7c38b1da24caa661f72392fbf1318db7f5330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
