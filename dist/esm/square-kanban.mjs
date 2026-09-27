export const name="square-kanban";
export const id="dl_07eccdab53b74a86b7a1";
export const url=new URL("../icons/square-kanban.svg?v=0b998c026dcd7e00cb8ab1b02e918c868e16c585e6f5f00f5f755a0b6413c530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
