export const name="trending_flat-fill";
export const id="dl_4c3407810f7bcee1b642";
export const url=new URL("../icons/trending_flat-fill.svg?v=a2c7e58be8a54ba47f57bf8ba7515d13a34a7f59f87f0184b9b238a96806c455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
