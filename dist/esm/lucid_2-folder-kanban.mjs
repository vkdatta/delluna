export const name="lucid_2-folder-kanban";
export const id="dl_8f5086cd7c3440c582e0";
export const url=new URL("../icons/lucid_2-folder-kanban.svg?v=b3e1dc03222b817e89a405e7f35e46cd62139ff63ab3ff8c1302564f340abe47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
