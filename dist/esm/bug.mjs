export const name="bug";
export const id="dl_44dbff2f81d74df69e6d";
export const url=new URL("../icons/bug.svg?v=cab732f703b3442e5bfb9dde02c2a880cd56d9f2659e343858d64ce75f5f7942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
