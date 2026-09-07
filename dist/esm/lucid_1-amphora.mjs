export const name="lucid_1-amphora";
export const id="dl_7aa6e1e92d324d059fd5";
export const url=new URL("../icons/lucid_1-amphora.svg?v=18844ca315b469b1d77385efcc905df44bfba3fe75a1c6bac33e730625db8bc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
