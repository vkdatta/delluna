export const name="wall";
export const id="dl_0f70a81bae6c4a03a5a0";
export const url=new URL("../icons/W/wall.svg?v=ff673d6e917fa094771079158a97e56075d6c5602636b529a4f9fc77850b143b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
