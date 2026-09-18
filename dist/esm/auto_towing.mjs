export const name="auto_towing";
export const id="dl_b5985cf8bd5a480c8376";
export const url=new URL("../icons/auto_towing.svg?v=b826cf123d1fceccc9f80ea4880da948708172a8f717140a757384da3bd29386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
