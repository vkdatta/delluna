export const name="comic_bubble-fill";
export const id="dl_68c6346c2b877cabbfb4";
export const url=new URL("../icons/comic_bubble-fill.svg?v=2a0e561bc0279c3093834028ce5b9496cd6c89b22f8b3ab345e790fe6b9b9cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
