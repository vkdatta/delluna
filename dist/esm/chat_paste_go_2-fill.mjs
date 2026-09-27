export const name="chat_paste_go_2-fill";
export const id="dl_c517c947c84fac764f3b";
export const url=new URL("../icons/chat_paste_go_2-fill.svg?v=f2cdcae11dbafc8e9f83c44b3e747ec874f48ec9dc9ad11ec04f959fc5dc72fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
