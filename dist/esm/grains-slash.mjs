export const name="grains-slash";
export const id="dl_9bd5f59c149a4927a125";
export const url=new URL("../icons/grains-slash.svg?v=1afc8a3327e112b527b36a58e21cb98a5e8dbffe0bc8f7e961c06dc557589ae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
