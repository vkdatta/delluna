export const name="chronic";
export const id="dl_d802598a099b5f289e83";
export const url=new URL("../icons/chronic.svg?v=b5ee3932aa196b5b4bdc311e4c167b4f4aaf4f6e15b4f2cd33d4eccbd14c0fda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
