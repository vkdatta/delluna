export const name="view_kanban";
export const id="dl_77ef95470860e170f8ee";
export const url=new URL("../icons/view_kanban.svg?v=8983bfb07fef86ddb220b312737b28f0ac26e88f8fed72c0f4629eebd8f8e80a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
