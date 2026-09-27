export const name="lucid_2-file-braces";
export const id="dl_7b66b26a1da6419fb627";
export const url=new URL("../icons/lucid_2-file-braces.svg?v=25f7fd957a64b9de55b055dc06e9b3c11a068157a4b38141e7f93b47fbb0f187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
