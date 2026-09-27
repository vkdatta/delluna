export const name="lucid_3-paint-bucket";
export const id="dl_af9c4b62b462423b8feb";
export const url=new URL("../icons/lucid_3-paint-bucket.svg?v=442cb60a6275a0d35c35baa8a094154031aed8a4c0ed4c9f884925fc3b66366f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
