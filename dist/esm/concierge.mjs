export const name="concierge";
export const id="dl_5a2f1ccff3e58ed23519";
export const url=new URL("../icons/concierge.svg?v=8ef7fabbf1891eed4c26a1565c77cbaed32f4a4b1b6de8169b2d38e5b90f854c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
