export const name="calendar-cog";
export const id="dl_71d0a5cb8c7b46b5bc53";
export const url=new URL("../icons/calendar-cog.svg?v=1806c295177c2d7092e4c36fe68af8f0567445383e651613f2ce3c2d102f2750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
