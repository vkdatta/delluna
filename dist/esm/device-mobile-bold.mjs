export const name="device-mobile-bold";
export const id="dl_5a23d11b4f624a4ca603";
export const url=new URL("../icons/device-mobile-bold.svg?v=fd4d6470a3897e35cac923c0b780e5a13ed1efebd8c2111ad33a5e23da98cbb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
