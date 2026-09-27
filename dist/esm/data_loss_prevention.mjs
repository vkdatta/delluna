export const name="data_loss_prevention";
export const id="dl_278038039d4d7884dc0e";
export const url=new URL("../icons/data_loss_prevention.svg?v=b8547c28e12f3da90c377f17f75aa3d018ac67e271e07189b7bc10cd2f091e58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
