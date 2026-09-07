export const name="lucid_2-folder-kanban";
export const id="dl_8f5086cd7c3440c582e0";
export const url=new URL("../icons/lucid_2-folder-kanban.svg?v=55b2e353861aa6290ad250dd2c84bc026a6a05f89c4959101a45ca593309d85d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
