export const name="toc-fill";
export const id="dl_027e93a04f804c828f91";
export const url=new URL("../icons/T/toc-fill.svg?v=067e4f3c6dd2e65f716210b25523ebce30bf407cf9b4c0ffe65c42910a7c8fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
