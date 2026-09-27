export const name="airplane-takeoff-thin";
export const id="dl_335695924eac4f38815a";
export const url=new URL("../icons/airplane-takeoff-thin.svg?v=98d85bc6f421e89c5333348188d634a60f7881e53ef31c44530cc295fefebb88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
