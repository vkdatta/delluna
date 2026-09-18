export const name="view_kanban";
export const id="dl_c722ffe79b804dbfb4aa";
export const url=new URL("../icons/view_kanban.svg?v=443ff5944f669b3c0d66486e7d25dca2a412fcaac87179f01029b90d71cc5e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
