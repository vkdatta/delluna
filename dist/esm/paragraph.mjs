export const name="paragraph";
export const id="dl_a71a2d1a53a4417e8952";
export const url=new URL("../icons/paragraph.svg?v=6265b477a179e111a98b44093e7865a8e9aa24369310702375880329e84f1a2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
