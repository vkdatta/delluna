export const name="nest_protect-fill";
export const id="dl_0a0caa217acc2cf9fe4c";
export const url=new URL("../icons/nest_protect-fill.svg?v=d10a9611b56e0dd75c66485aa5b81569c06135532a27780c44d7e9f04384413f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
