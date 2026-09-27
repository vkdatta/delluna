export const name="dialer_sip";
export const id="dl_b75720863c8799199475";
export const url=new URL("../icons/dialer_sip.svg?v=031f813594f455d1448ec1533a921ea579d66eb765d62ef0f70e14fc8c3ff24e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
