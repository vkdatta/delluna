export const name="trophy-duotone";
export const id="dl_6f730a179c86df817b2c";
export const url=new URL("../icons/trophy-duotone.svg?v=1e368b30fedaaad27ab02c83a87f74321b7a9b0441acc4683401805f3336b250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
