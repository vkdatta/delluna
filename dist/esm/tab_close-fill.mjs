export const name="tab_close-fill";
export const id="dl_cd0605b59043b753ac9f";
export const url=new URL("../icons/tab_close-fill.svg?v=a99d870bd55593012964213f428e3c3e4845d3f40822d0325520c8fc5e3efc11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
