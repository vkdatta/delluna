export const name="screencast-fill";
export const id="dl_c6dc5416c3fa4db6b8ee";
export const url=new URL("../icons/S/screencast-fill.svg?v=2e86cbec1ae106cbda9d5610b1e68b4ad176c1391035d7d31e5966b1993f4667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
