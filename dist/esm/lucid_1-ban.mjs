export const name="lucid_1-ban";
export const id="dl_4f8074b7682b4c2e84c0";
export const url=new URL("../icons/lucid_1-ban.svg?v=28810bc77942f2ac1d1b22163badccb5ca361f0f026fb067cbcfe8966e00adef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
