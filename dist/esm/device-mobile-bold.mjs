export const name="device-mobile-bold";
export const id="dl_5a23d11b4f624a4ca603";
export const url=new URL("../icons/device-mobile-bold.svg?v=58880e2afbee24cd0889bbb6648e90d80d150ec9dd03e8729b88d006c33c5161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
