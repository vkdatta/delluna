export const name="number-three-light";
export const id="dl_fd32639f2bed4d008f4f";
export const url=new URL("../icons/number-three-light.svg?v=6c4cc6de7aeabe4c80cebbdca9d7517c37b79e84d5f917771a4326baa10342a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
