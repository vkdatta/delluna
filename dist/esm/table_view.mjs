export const name="table_view";
export const id="dl_91bc757ee84717de7636";
export const url=new URL("../icons/table_view.svg?v=c5045b6b2e94167467df4df8510db32c543c550f411e5e8aac3b0641a3b134e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
