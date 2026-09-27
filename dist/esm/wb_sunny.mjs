export const name="wb_sunny";
export const id="dl_8d42459ebbfbf55630a3";
export const url=new URL("../icons/wb_sunny.svg?v=f7e353f56d0a92c741fb65cb9fbb73ec001a9fb41a2d7f910921674a8258338b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
