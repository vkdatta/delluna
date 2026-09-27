export const name="lucid_2-folder-plus";
export const id="dl_c128a57a4e2d4f21b280";
export const url=new URL("../icons/lucid_2-folder-plus.svg?v=f1f1a9b3847dbd2516b994efa1224d1ab8be98df8d0847bae5ce4078cdc60e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
