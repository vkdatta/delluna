export const name="moon-fill";
export const id="dl_6fd2e897240d44fc9294";
export const url=new URL("../icons/moon-fill.svg?v=099574dba1662cf9cdff50a1859ae8cc605a9b6a10bace00d89a0f52205e76df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
