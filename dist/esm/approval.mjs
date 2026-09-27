export const name="approval";
export const id="dl_4e74a2c5549fd62150db";
export const url=new URL("../icons/approval.svg?v=6a6075e80566e790ad5b175609bb346a92814d50776315ef4400a454cb8057c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
