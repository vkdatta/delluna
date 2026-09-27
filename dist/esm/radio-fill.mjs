export const name="radio-fill";
export const id="dl_d549ba0a754f4296af89";
export const url=new URL("../icons/radio-fill.svg?v=32d7d2efb4b97d059a2f3e8bd1b9b0c43b8c81b474abd11559d0d6ddff2696c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
