export const name="selection-foreground";
export const id="dl_ce66b8c33bb3e3683260";
export const url=new URL("../icons/selection-foreground.svg?v=959ea28ab824595b05d1e6e921abdf868b3c04c26a9cbd04f6b9956abdb3fc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
