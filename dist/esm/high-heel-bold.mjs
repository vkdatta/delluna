export const name="high-heel-bold";
export const id="dl_5972db37eaf8428ea5f7";
export const url=new URL("../icons/high-heel-bold.svg?v=b5377b548ab4930da05f29512f1c58742a468df999268327255200e899fc45e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
