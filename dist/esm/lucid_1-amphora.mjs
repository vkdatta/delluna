export const name="lucid_1-amphora";
export const id="dl_7aa6e1e92d324d059fd5";
export const url=new URL("../icons/lucid_1-amphora.svg?v=227c7eb0a447444902300c66f947671b0e18caff18196e9f223388ea67f5e230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
