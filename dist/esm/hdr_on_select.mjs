export const name="hdr_on_select";
export const id="dl_88dfcce1a6a08030c63a";
export const url=new URL("../icons/hdr_on_select.svg?v=2a571d7be9a2a48f233cf4bcb62cc227eb3306a5fc371b5d6d1d83094afa4ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
